import React from "react";
import "./App.scss";
import store, { useAppDispatch, useStoreSlice } from "./store";
import { ConfigProvider } from "antd";
import Main from "./modules/main";
import SelectorContainer from "./modules/selector";
import DataContextProvider from "./context";
function App() {
  const antdLocale = useStoreSlice("config").get().resource?.antd;

  return (
    <ConfigProvider locale={antdLocale}>
      <DataContextProvider>
        <div className="app-container">
          <SelectorContainer></SelectorContainer>
          <Main />
        </div>
      </DataContextProvider>
    </ConfigProvider>
  );
}

export default App;
