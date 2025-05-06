import React from "react";
import { Select } from "antd";
import { changeLang, locales, localesText } from '@/hooks'
import { useStoreSlice } from "@/store";
const { Option } = Select;

const LocaleChange = () => {
  
  const {get} = useStoreSlice('config')
  const handleChange = (value: any) => {
    changeLang(value)
  };

  return (
    <Select value={get().i18n} style={{ width: 120 }} onChange={handleChange}>
      {locales.map((key,index) => (
        <Option key={key} value={key}>{localesText[index]}</Option>
      ))}
    </Select>
  );
};

export default LocaleChange;
