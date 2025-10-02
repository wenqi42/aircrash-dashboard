import React from "react";
import { Slider, InputNumber, Space } from "antd";
import { useStoreSlice } from "@/store/index";
import airDataSlice from "@/store/airData";
import { useDebounceFn } from "ahooks";
interface FatalitiesSelectorProps {
  style?: React.CSSProperties;
  className?: string;
}

const FatalitiesSelector: React.FC<FatalitiesSelectorProps> = ({
  style = {
    minWidth: 300,
    margin: "0px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  className,
}) => {
  const { fatalities } = useStoreSlice("airData").get().selector || {};
  const setFatalities = useStoreSlice("airData").set;

  const { run: handleChange } = useDebounceFn(
    (value: [number, number] | null) => {
      if (value) {
        setFatalities("setFatalities", { fatalities: value });
      } else {
        // 重置为默认值
        setFatalities("setFatalities", { fatalities: [0, Infinity] });
      }
    },
    { wait: 1000 }
  );

  // 处理Infinity值，用于显示
  const displayValue = fatalities
    ? ([fatalities[0], fatalities[1] === Infinity ? 584 : fatalities[1]] as [
        number,
        number
      ])
    : [0, 584];

  return (
    <div style={style} className={className}>
      <div style={{ marginRight: 8, fontSize: 14, color: "#666" }}>
        {window.t("selectFatalitiesRange")}：
      </div>
      <Slider
        range
        min={0}
        max={584}
        style={{ minWidth: 200 }}
        value={displayValue}
        //@ts-ignore
        onChange={handleChange}
        marks={{
          0: "0",
          100: "100",
          584: "584",
        }}
      />
    </div>
  );
};

export default FatalitiesSelector;
