import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import dayjs from "dayjs";
import {changeLang, initI18n} from './i18n/i18n'
import { getPresaveLang, setPresaveLang } from "./utils/constant";
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
window.dayjs = dayjs;



const initApp = async ()=>{
  const lang = getPresaveLang()
  changeLang(lang as any);
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  
  root.render(<Provider store={store}>
    <App />
  </Provider> 
  );
}

initApp()

