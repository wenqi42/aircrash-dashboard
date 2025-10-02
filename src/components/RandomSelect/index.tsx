import { eventEmitter } from "@/utils";
import { Button } from "antd";
import React, { useCallback } from "react";
import { SELECT_FEATURE_ID } from "../Map";
import './index.scss'
const prefix = 'random-select'

const RandomSelect = () => {

    const randomClick = useCallback(()=>{
        eventEmitter.emit(SELECT_FEATURE_ID)
    },[])
  return (
    <div className={`${prefix}-wrapper`}>
      <Button onClick={randomClick}>{window.t("随机选择")}</Button>
    </div>
  );
};

export default RandomSelect;
