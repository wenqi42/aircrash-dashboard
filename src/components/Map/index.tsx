import { useFilterDataContext } from "@/context";
import { useStoreSlice } from "@/store";
import { getRandomHexColor } from "@/utils";
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
import { Spin } from "antd";
import { FeatureCollection, GeoJsonObject, Point } from "geojson";
import React, { useEffect, useMemo, useRef, useState } from "react";

export interface IMapProps {
  id: string;
  mapConfig?: IMapConfig;
}

const totalLength = 3000

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

  const{filterData:geoData,setSelectData }= useFilterDataContext()
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
        mapInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    let  pointerLay:ILayer
    if (mapInstance) {
      const size = calcSize(geoData.features.length)
      const scene = mapInstance;


      pointerLay = new PolygonLayer()
        .source(geoData)
        .shape("circle")
        .size(size).active(true).color('Fatalities',(val)=>{
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


      //** tooltip layer */
      const layerPopup2 = new LayerPopup({
        items: [
          {
            layer: pointerLay,
            fields: [
              {
                field: 'country',
                formatField: () => '国家',
              },
              {
                field: 'Date',
                formatField: () => '日期',
              },
              {
                field: 'Fatalities',
                formatField: () => '死亡人数',
              },
              {
                field: 'Aboard',
                formatField: () => '搭载',
              },

            ],
          },
        ],
      });
      mapInstance.addPopup?.(layerPopup2)
      //** tooltip layer */
    }
    return ()=>{
      mapInstance?.removeLayer(pointerLay)
    }
  }, [mapInstance, geoData]);

  return <div ref={mapDom} id={id} />;
};

export default Map;
