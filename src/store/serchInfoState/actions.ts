import { SerchInfoActionTypes, SET_CURRENT_LINE_ALIAS, SET_CURRENT_STATION_ID, SET_CURRENT_DIRECTION } from "./types";

export const setCurrentLinAlias = (lineAlias: string): SerchInfoActionTypes => ({
  type: SET_CURRENT_LINE_ALIAS,
  payload: lineAlias
})

export const setCurrentStationId = (stationId: number | null): SerchInfoActionTypes => ({
  type: SET_CURRENT_STATION_ID,
  payload: stationId
})

export const setCurrentDirection = (direction: string): SerchInfoActionTypes => ({
  type: SET_CURRENT_DIRECTION,
  payload: direction
})

export const setCurrentExitId = (exitId: string): SerchInfoActionTypes => ({
  type: SET_CURRENT_DIRECTION,
  payload: exitId
})