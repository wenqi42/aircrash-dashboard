import React from "react";
import "./App.css";
import store, { useAppDispatch, useStoreSlice } from "./store";
import { ConfigSlice} from "./store/configSlice";
import { ConfigProvider } from "antd";
import LocaleChange from "./components/LocaleChange";
import Main from "./modules/main";

function App() {
  const testStore = useStoreSlice("config");

  return (
    <ConfigProvider locale={testStore.get().resource?.antd}>
      <div className="app-container">
        <LocaleChange />
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
