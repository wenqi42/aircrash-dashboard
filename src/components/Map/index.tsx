import { useFilterDataContext } from "@/context";
import { useStoreSlice } from "@/store";
import { eventEmitter, getRandomHexColor } from "@/utils";
import {
  ILayerConfig,
  PolygonLayer,
  Scene,
  IMapConfig,
  GaodeMap,
  Scale,
  Zoom,
  PointLayer,
  LineLayer,
  ILayer,
  LayerPopup,
} from "@antv/l7";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface IMapProps {
  id: string;
  mapConfig?: IMapConfig;
}

const totalLength = 3000

export const SELECT_FEATURE_ID = '_SELECT_FEATURE_ID_'

function calcSize(size: number) {
  if(size === 0) return 9
  return ((1 - size/totalLength) * 4) + 5.5
}

// 根据死亡人数实现蓝色到红色的渐变
function calcColor(rate: number) {
 let green = Math.ceil(255 -  255 * rate)
 let red =  Math.ceil(255 *rate)
 return `rgba(${red},${green},0,0.6)`

}


const Map = (props: IMapProps) => {
  const { id, mapConfig = {} } = props;
  const [mapInstance, setMapInstance] = useState<Scene | null>(null);
  const mapDom = useRef<HTMLDivElement | null>(null);

  const { i18n } = useStoreSlice('config').get()
  const{filterData:geoData,setSelectData }= useFilterDataContext()

  const dataLengthRef = useRef(5)

  useMemo(()=>{
    let size = calcSize(geoData.features.length)
    dataLengthRef.current = size
  },[geoData.features.length])
  const layerInstance = useRef<ILayer | null>(null)
  useEffect(() => {
    if (mapDom.current) {
      const scene = new Scene({
        id: id,
        map: new GaodeMap({
          style: "light",
          center: [120, 45],
          zoom: 2,
          ...mapConfig,
          token: "114a5347c4fd62dca7d4b546fc90182d",
        }),
      });
      const scaleControl = new Scale({ position: "bottomright" });
      const zoomControl = new Zoom({ position: "bottomright" });
      scene.addControl(zoomControl);
      scene.addControl(scaleControl);
      scene.on("loaded", () => {
        setMapInstance(scene);
      });
    }
    return () => {
      if (mapInstance) {
        mapInstance?.destroy?.();
      }
    };
  }, []);

  useEffect(() => {
    let  pointerLay:ILayer
    if (mapInstance) {
      const scene = mapInstance;

      if(!layerInstance.current){
        pointerLay = new PolygonLayer()
          .source(geoData)
          .shape("circle")
          .size('country',()=>{
            return dataLengthRef.current
          }).active(true).color('Fatalities',(val)=>{
            return calcColor(val)
          })
          .style({
            opacity: 0.5,
            strokeWidth: 1,
            cursor: 'pointer',
          });
          pointerLay.on('click', (e)=>{
            setSelectData(e.feature)
          })
        scene.addLayer(pointerLay);
          layerInstance.current = pointerLay
  
        //** tooltip layer */
        const layerPopup2 = new LayerPopup({
          items: [
            {
              layer: pointerLay,
              fields: [
                {
                  field: 'country',
                  formatField: () => window.t('drawer.field.country'),
                },
                {
                  field: 'Date',
                  formatField: () => window.t('drawer.field.date'),
                },
                {
                  field: 'Fatalities',
                  formatField: () => window.t('drawer.field.fatalities'),
                },
                {
                  field: 'Aboard',
                  formatField: () => window.t('drawer.field.aboard'),
                },
  
              ],
            },
          ],
        });
        mapInstance.addPopup?.(layerPopup2)
        //** tooltip layer */
      } else {
        layerInstance.current.setData(geoData)
      }
    }
    return
  }, [mapInstance, geoData,i18n,setSelectData]);

  const SELECT_FEATURE_ID_Cb = useCallback(()=>{
    const layer = layerInstance.current
    if(!layer){
      return
    }
    const source = layer.getSource()
    const length = source.data.dataArray.length
    const randomId = Math.floor(Math.random() * length)
    let random = source.getFeatureById(randomId)
    if(random){
      setSelectData(random as any)
      layer.setActive(randomId)
    }
  },[layerInstance.current])

  useEffect(()=>{
    eventEmitter.on(SELECT_FEATURE_ID,SELECT_FEATURE_ID_Cb)
    return ()=>{
      eventEmitter.removeListener(SELECT_FEATURE_ID,SELECT_FEATURE_ID_Cb)
    }
  },[SELECT_FEATURE_ID_Cb])

  useEffect(()=>{
    return ()=>{
      if(layerInstance.current && mapInstance){
        mapInstance?.removeLayer?.(layerInstance.current)
      }
    }
  },[mapInstance])

  return <div ref={mapDom} id={id} />;
};

export default Map;
