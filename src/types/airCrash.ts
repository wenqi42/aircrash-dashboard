import { FeatureCollection } from "geojson";

export interface AirCrashData {
  Date: string;
  Time: number;
  Location: string;
  Operator: string;
  Route: string;
  Type: string;
  "cn/In"?: number;
  Aboard: number;
  Fatalities: number;
  Ground: number;
  Summary: string;
  country:string
}

export interface ISelector {
  country?: string;
  date?: string[];
  fatalities?: [number, number];
  deathRate?: [string | number, string | number];
}

export interface AirDataState {
  data: FeatureCollection<any, AirCrashData>;
  loading: boolean;
  error: string | null;
  selector?: ISelector;
}
