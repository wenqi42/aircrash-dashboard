import L7, { IMapConfig, Scene } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import React, { useEffect, useRef } from "react";

export interface IMapProps {
  id: string;
  mapConfig?: IMapConfig;
}

const Map = (props: IMapProps) => {
  const {
    id,
    mapConfig = {
      style: "dark",
      center: [110.770672, 34.159869],
      pitch: 45,
    },
  } = props;
  const mapInstance = useRef<Scene | null>(null);
  const mapDom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapDom.current) {
      mapInstance.current = new L7.Scene({
        id,
        map: new L7.GaodeMap(mapConfig),
      });
    }
    return () => {
      if (mapInstance.current) {
        mapInstance.current?.destroy();
      }
    };
  }, [mapDom.current, id, mapConfig]);
  return (
    <>
      <div ref={mapDom} id={id} />
    </>
  );
};

export default Map;
