import React from "react";
import { Slider, InputNumber, Space } from "antd";
import { useStoreSlice } from "@/store/index";
import airDataSlice from "@/store/airData";
import { useDebounceFn } from "ahooks";
interface DeathRateSelectorProps {
  style?: React.CSSProperties;
  className?: string;
}

const DeathRateSelector: React.FC<DeathRateSelectorProps> = ({
  style = {
    minWidth: 300,
    margin: '0px 10px',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    textWrap:'nowrap',
  },
  className,
}) => {
  const { deathRate } = useStoreSlice("airData").get().selector || {};
  const setDeathRate = useStoreSlice('airData').set;


  // 将0-1的值转换为0-100的百分比显示
  const displayValue = deathRate ? [
    //@ts-ignore
    Math.round(deathRate[0] * 100),
    //@ts-ignore 
    Math.round(deathRate[1] * 100)
  ] as [number, number] : [0, 100];

  const {run:handleDisplayChange} = useDebounceFn((value: [number, number] | null) => {
    if (value) {
      // 将百分比值转换回0-1的小数
      const actualValue = [value[0] / 100, value[1] / 100] as [number, number];
      setDeathRate('setDeathRate', { deathRate: actualValue });
    }
  }, {wait:1000});

  return (
    <div style={style} className={className}>
      <div style={{ marginRight: 8, fontSize: 14, color: '#666'}}>
        {window.t('selectDeathRateRange')}：
      </div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Slider
          range
          min={0}
          max={100}
          style={{minWidth:200}}
          value={displayValue}
          //@ts-ignore
          onChange={handleDisplayChange}
          marks={{
            0: '0%',
            25: '25%',
            50: '50%',
            75: '75%',
            100: '100%'
          }}
          tooltip={{
            formatter: (value) => `${value}%`
          }}
        />
      </Space>
    </div>
  );
};

export default DeathRateSelector;
