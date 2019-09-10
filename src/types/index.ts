export interface StationInfo {
  lineAlias: string;
  stationId: number;
  stationName: string;
  exit: ExitInfo[];
}

export interface ExitInfo {
  exitId: string;
  carOrder: number;
  doorId: number;
}