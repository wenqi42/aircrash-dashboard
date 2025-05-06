export interface AirCrashData {
  Date: string;
  Time: number;
  Location: string;
  Operator: string;
  Route: string;
  Type: string;
  'cn/In'?: number;
  Aboard: number;
  Fatalities: number;
  Ground: number;
  Summary: string;
}

export interface AirDataState {
  data: AirCrashData[];
  loading: boolean;
  error: string | null;
} 