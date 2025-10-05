import store from "@/store";
import { setI18n } from "@/store/configSlice";
import type { textJsonType } from "@/types";
import { eventEmitter } from "@/utils";
import { getPresaveLang, setPresaveLang } from "@/utils/constant";
import dayjs from "dayjs";

export const locales = ["en", "zh-cn"] as const;
export const localesText = ["English", "简体中文"] as const;
export const ON_RESOURCE_LOADED = "ON_RESOURCE_LOADED";

export type langPackages = {
  resource: {
    antd?: any;
    dayjs?: any;
  };
};

export const t = (key: keyof textJsonType) => {
  return window.langPackages?.text?.[key] || key;
};
window.t = t;

let init = true;

export const initI18n = async (lang: (typeof locales)[number]) => {
  let langPackages: langPackages = { text: {}, resource: {} } as langPackages;
  let textJson: textJsonType = {} as textJsonType;

  let resourceProxy = new Proxy(langPackages.resource, {
    set(target, prop, value) {
      eventEmitter.emit(ON_RESOURCE_LOADED, prop, value);
      return Reflect.set(target, prop, value);
    },
  });
  langPackages.resource = resourceProxy;
  //获取简体中文的资源包
  if (lang === "zh-cn") {
    await import("../locale/zh-cn/text.json").then((res) => {
      textJson = res.default;
      window.langPackages = langPackages || {};
      window.langPackages.text = textJson;
    });
    import("antd/es/locale/zh_CN.js").then((res) => {
      langPackages.resource.antd = res.default;
    });
    import("dayjs/locale/zh-cn").then((res) => {
      dayjs.locale(res.default);
    });
  }
  //获取英文的资源包
  if (lang === "en") {
    await import("../locale/en/text.json").then((res) => {
      textJson = res.default;
      window.langPackages = langPackages || {};
      window.langPackages.text = textJson;
    });
    import("antd/es/locale/en_US.js").then((res) => {
      langPackages.resource.antd = res.default;
    });
    import("dayjs/locale/en").then((res) => {
      dayjs.locale(res.default);
    });
  }
  init = false;
  return langPackages;
};

export const changeLang = async (lang: (typeof locales)[number]) => {
  const currentLang = getPresaveLang();
  if (currentLang === lang && !init) {
    return;
  }
  const langPackages = await initI18n(lang);
  document.documentElement.lang = lang;
  window.langPackages = langPackages;
  setPresaveLang(lang);
  store.dispatch(setI18n({ lang, langPackages }));
  return langPackages;
};

export const onResourceLoaded = (
  callback: (resourceKey: keyof langPackages["resource"], resource: any) => void
) => {
  eventEmitter.on(ON_RESOURCE_LOADED, callback);
};
