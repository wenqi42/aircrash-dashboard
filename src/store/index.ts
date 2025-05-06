import ConfigSlice from "./configSlice";
import AirSLice, { fetchAirDataMiddleware } from "./airData";
//redux/toolkit的模板
import { configureStore, Dispatch, applyMiddleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { onResourceLoaded } from "@/i18n/i18n";

export const sliceMap = {
  config: ConfigSlice,
  airData: AirSLice,
} as const;

// 创建 store
const store = configureStore({
  reducer: Object.keys(sliceMap).reduce((acc, k) => {
    const key = k as keyof typeof sliceMap;
    //@ts-ignore
    acc[key] = sliceMap[key].reducer;
    return acc;
  }, {} as { [K in keyof typeof sliceMap]: (typeof sliceMap)[K]["reducer"] }),
  // 可选配置项
  middleware: (getDefaultMiddleware) => {
    const mid = getDefaultMiddleware();
    mid.push(function logger({ getState }) {
      return (next) => (action) => {
        // 调用 middleware 链中下一个 middleware 的 dispatch。
        // setTimeout(()=>{

        //   console.log('state after dispatch', getState(),returnValue)
        // },1500)

        const returnValue = next(action);
        return returnValue;
      };
    });
    mid.push(fetchAirDataMiddleware)
    return mid;
  },
  devTools: process.env.NODE_ENV !== "production",
});

onResourceLoaded((k, v) => {
  store.dispatch(
    ConfigSlice.actions.loadResource?.({ resourceKey: k, resource: v })
  );
});



// 导出 store 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 创建类型化的 hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useStoreSlice<T extends keyof typeof sliceMap>(name: T) {
  const slice = sliceMap[name];
  const dispatch = useDispatch<AppDispatch>();
  const select = useSelector((state: RootState) => state[name]);
  const act = slice.actions;
  return {
    set: <fn extends (...args: any[]) => any>(
      action: keyof (typeof sliceMap)[T]["actions"] | ((...args: any[]) => any),
      ...payload: Parameters<fn>
    ) => {
      return dispatch(
        typeof action === "function"
          ? action(...payload)
          : //@ts-ignore
            act?.[action]?.(...payload)
      );
    },
    get: () => select,
  };
}

export default store;
