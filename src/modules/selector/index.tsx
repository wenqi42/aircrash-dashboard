import React from "react";
import "./index.scss";
import { Layout } from "antd";
import CountrySelector from "@/components/CountrySelector";
import DateSelector from "@/components/DateSelector";
import FatalitiesSelector from "@/components/FatalitiesSelector";
import DeathRateSelector from "@/components/DeathRateSelector";
import LocaleChange from "@/components/LocaleChange";
const { Header } = Layout;

interface ISelectorContainer {}

const p = `scss-selector`;
const SelectorContainer = (
  props: React.PropsWithChildren<ISelectorContainer>
) => {
  
  return (
    <div className="scss-wrapper">
      <Header className={p}>
        <LocaleChange></LocaleChange>
        <CountrySelector></CountrySelector>
        <DateSelector></DateSelector>
        <FatalitiesSelector></FatalitiesSelector>
        <DeathRateSelector></DeathRateSelector>
      </Header>
    </div>
  );
};

export default SelectorContainer;
