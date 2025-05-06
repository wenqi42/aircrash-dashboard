import { createAsyncThunk, createSlice, PayloadAction, Middleware } from '@reduxjs/toolkit';
import { ConfigSlice } from './configSlice';
import store, { RootState } from '.';
import { AirCrashData, AirDataState } from '@/types/airCrash';
import { locales } from '@/hooks';


export const fetchAirData = createAsyncThunk('fetchAirData',async (lang:typeof locales[number])=>{
  const res = await  fetch(`./data/${lang}.json`).then(res=>res.json())  
  return res
})
// 初始化一下redux slice
// 定义 slice 的初始状态
const initialState: AirDataState = {
  // 这里可以根据实际需求定义状态的结构
  data: [],
  loading: false,
  error: null,
};



// 创建 redux slice
const airDataSlice = createSlice({
  name: 'airData',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(ConfigSlice.actions.setI18n, (state, action) => {
    //     const newLang = action.payload.lang;
    //     const preLang = store.getState().config.i18n
    //     if(newLang !== preLang && newLang){
    //      console.log(state,action,ConfigSlice.actions.setI18n,builder,'******')
    //      store.dispatch(fetchAirData(newLang))
    //     }
    //   });
    builder.addCase(fetchAirData.pending,(state,action)=>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchAirData.fulfilled,(state, action: PayloadAction<AirCrashData[]>) => {
      state.loading = false;
      state.data = action.payload;
    })  
    builder.addCase(fetchAirData.rejected,(state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
});

export const fetchAirDataMiddleware:Middleware = (store)=> (next)=> (action:any)=>{
  if (action.type === ConfigSlice.actions.setI18n.type) {
    const newLang = action.payload.lang
      next(action);
      //@ts-ignore
      store.dispatch(fetchAirData(newLang));
      return;
    
  }
  return next(action);
};


export default airDataSlice
