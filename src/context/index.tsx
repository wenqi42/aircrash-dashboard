import { useStoreSlice } from "@/store";
import { AirDataState } from "@/types/airCrash";
import React, { createContext, useContext, useMemo, useState } from "react";
import dayjs from "dayjs";
type DataType = AirDataState["data"];

export interface IDataContext extends Partial<AirDataState> {
  filterData: DataType;
  selectData?: DataType["features"][number];
  setSelectData: (data: DataType["features"][number]) => void;
}

const DataContext = createContext<IDataContext>({
  filterData: {} as DataType,
  setSelectData: () => {},
});

const DataContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    country,
    date = ["1900-01-01", dayjs().format("YYYY-MM-DD").toString()],
    deathRate = [0, 1],
    fatalities = [0, Infinity],
  } = useStoreSlice("airData").get().selector || {};
  const oriData = useStoreSlice("airData").get().data;
  const filterData = useMemo<DataType>(() => {
    const newData: DataType = {
      type: "FeatureCollection",
      features: [],
    };

    Object.values(oriData.features || []).forEach((now) => {
      if (now) {
        const item = now;
        let needFilter = false;
        const rate =
          item.properties.Fatalities > 0
            ? (
                Number(item.properties.Fatalities) /
                Number(item.properties.Aboard)
              ).toFixed(4)
            : "0";

        if (country && !item.properties.country?.includes(country)) {
          needFilter = true;
        }

        if (Array.isArray(date) && date[0] && date[1]) {
          if (
            dayjs(item.properties.Date).isBefore(dayjs(date[0])) ||
            dayjs(item.properties.Date).isAfter(dayjs(date[1]))
          ) {
            needFilter = true;
          }
        }

        if (fatalities?.[0] !== undefined && fatalities?.[1] !== undefined) {
          if (
            item.properties.Fatalities < fatalities[0] ||
            item.properties.Fatalities > fatalities[1]
          ) {
            needFilter = true;
          }
        }
        if (deathRate?.[0] !== undefined && deathRate?.[1] !== undefined) {
          if (
            Number(rate) < Number(deathRate[0]) ||
            Number(rate) > Number(deathRate[1])
          ) {
            needFilter = true;
          }
        }

        if (!needFilter) {
          return newData.features.push(now);
        }
      }
    }, {} as AirDataState["data"]);
    return newData;
  }, [country, date, fatalities, deathRate, oriData]);

  const [selectData, setSelectData] = useState<DataType["features"][number]>();
  return (
    <DataContext.Provider value={{ filterData, selectData, setSelectData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useFilterDataContext = () => useContext(DataContext);
export default DataContextProvider;
