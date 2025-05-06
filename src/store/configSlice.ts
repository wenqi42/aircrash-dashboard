import { locales, langPackages, t } from "@/i18n/i18n";
import { textJsonType } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export interface ConfigState extends Partial<langPackages> {
  i18n: (typeof locales)[number];
}

const initialState: ConfigState = {
  i18n: "zh-cn",
  resource: {},
  text: window.langPackages?.text || {} as textJsonType,
};

export const ConfigSlice = createSlice({
  name: "Config",
  initialState,
  selectors: {
    t: () => t,
  },
  reducers: {
    setI18n: (
      state,
      action: PayloadAction<{
        lang: (typeof locales)[number];
        langPackages: langPackages;
      }>
    ) => {
      const { lang, langPackages } = action.payload;
      state.i18n = lang;
      state.text = langPackages.text;
      return state;
    },
    loadResource: (state,action:PayloadAction<{
      resourceKey:keyof langPackages['resource'],
      resource:any
    }>)=>{
      const {resourceKey,resource} = action.payload
      if(state.resource){
        state.resource[resourceKey] = resource
      }

      return state
    }
  },

  // extraReducers: (builder) => {
  //   builder.addCase('test/fulfilled',(state,action)=>{
  //     console.log('test',action,state)

  //   })
  // }
});

export const { setI18n,loadResource } = ConfigSlice.actions;

export default ConfigSlice;
