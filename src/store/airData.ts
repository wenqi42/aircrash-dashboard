import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Middleware,
  createSelector,
} from "@reduxjs/toolkit";
import { ConfigSlice } from "./configSlice";
import store, { RootState } from ".";
import { AirCrashData, AirDataState } from "@/types/airCrash";
import { locales } from "@/hooks";
import { FeatureCollection } from "geojson";
import dayjs from "dayjs";

export const fetchAirData = createAsyncThunk(
  "fetchAirData",
  async (lang: (typeof locales)[number]) => {
    const res = await fetch(`./data/${lang}.json`).then((res) => res.json());
    return res;
  }
);

// 初始化一下redux slice
// 定义 slice 的初始状态
const initialState: AirDataState = {
  // 这里可以根据实际需求定义状态的结构
  data: {} as FeatureCollection<any, AirCrashData>,
  loading: false,
  error: null,
  selector: {
    date: ["1900-00-00", dayjs().toString()],
    deathRate: [0, 1],
    fatalities: [0, Infinity],
  },
};

// 创建 redux slice
const airDataSlice = createSlice({
  name: "airData",
  initialState,
  reducers: {
    setCountry: (
      state,
      action: PayloadAction<{
        country: string;
      }>
    ) => {
      state.selector = state.selector || {};
      state.selector.country = action.payload.country;
      return state;
    },
    setDate: (state, action: PayloadAction<{ date: [string, string] }>) => {
      state.selector = state.selector || {};
      state.selector.date = action.payload.date;
      return state;
    },
    setDeathRate: (
      state,
      action: PayloadAction<{ deathRate: [number | string, number | string] }>
    ) => {
      state.selector = state.selector || {};
      state.selector.deathRate = action.payload.deathRate;
      return state;
    },
    setFatalities: (
      state,
      action: PayloadAction<{ fatalities: [number, number] }>
    ) => {
      state.selector = state.selector || {};
      state.selector.fatalities = action.payload.fatalities;
      return state;
    },
    resetSelector: (state) => {
      state.selector = {
        date: ["1900-00-00", dayjs().toString()],
        deathRate: [0, 1],
        fatalities: [0, Infinity],
      };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAirData.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchAirData.fulfilled,
      (state, action: PayloadAction<FeatureCollection<any, AirCrashData>>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(
      fetchAirData.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const fetchAirDataMiddleware: Middleware =
  (store) => (next) => (action: any) => {
    if (action.type === ConfigSlice.actions.setI18n.type) {
      const newLang = action.payload.lang;
      next(action);
      //@ts-ignore
      store.dispatch(fetchAirData(newLang));
      return;
    }
    return next(action);
  };

export default airDataSlice;
