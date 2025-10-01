import React from "react";
import { DatePicker } from "antd";
import { useStoreSlice } from "@/store/index";
import airDataSlice from "@/store/airData";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { useDebounceFn } from "ahooks";
const { RangePicker } = DatePicker;

interface DateSelectorProps {
  style?: React.CSSProperties;
  className?: string;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  style = {
    minWidth: 280,
    margin: '0px 15px'
  },
  className,
}) => {
  const { i18n: lang } =
    useStoreSlice("config").get();
  const { date } = useStoreSlice("airData").get().selector || {};
  const setDate = useStoreSlice('airData').set;

  const {run:handleChange} = useDebounceFn((dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates && dates[0] && dates[1]) {
      const startDate = dates[0].format("YYYY-MM-DD");
      const endDate = dates[1].format("YYYY-MM-DD");
      setDate('setDate', { date: [startDate, endDate] });
    } else {
      // 重置为默认值
      setDate('setDate', { 
        date: ["1900-01-01", dayjs().format("YYYY-MM-DD")] 
      });
    }
  }, {wait:1000});

  // 将字符串日期转换为dayjs对象
  const value = date && date.length === 2 
    ? [dayjs(date[0]), dayjs(date[1])] as [Dayjs, Dayjs]
    : undefined;

  return (
    <RangePicker
      value={value}
      onChange={handleChange}
      placeholder={[window.t('selectDateRange'), window.t('selectDateRange')]}
      style={style}
      className={className}
      format="YYYY-MM-DD"
      allowClear
      showTime={false}
    />
  );
};

export default DateSelector;
