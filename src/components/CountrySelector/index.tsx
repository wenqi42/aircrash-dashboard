import React from "react";
import { Select } from "antd";
import { CountryCode, getCountryArray } from "./data";
import { useStoreSlice } from "@/store/index";
import { useDebounceFn } from "ahooks";

interface CountrySelectorProps {
  value?: CountryCode;
  onChange?: (value: CountryCode) => void;
  style?: React.CSSProperties;
  className?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  style = {
    minWidth:140,
    margin:'0px 15px'
  },
  className,
}) => {
  const { i18n: lang} =
    useStoreSlice("config").get();
  const { country } = useStoreSlice("airData").get().selector || {};
  const setCountry = useStoreSlice('airData').set
  const countries = getCountryArray(lang);
  const {run:handleChange} = useDebounceFn((value: CountryCode) => {
    setCountry('setCountry',{country:value})
  }, {wait:1000});

  return (
    <Select
      value={country}
      onChange={handleChange}
      placeholder={window.t('selectCountry')}
      style={style}
      className={className}
      options={countries}
      allowClear
      showSearch
      filterOption={(input, option) => {
        const label = option?.label || "";
        return String(label).toLowerCase().includes(input.toLowerCase());
      }}
    ></Select>
  );
};

export default CountrySelector;
