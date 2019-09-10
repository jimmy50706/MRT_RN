export interface SerchInfoState {
  currentLineAlias: string;
  currentStationId: number | null;
  currentDirection: string;
  currentExitId: string;
}

export const SET_CURRENT_LINE_ALIAS = 'SET_CURRENT_LINE_ALIAS';

export const SET_CURRENT_STATION_ID = 'SET_CURRENT_STATION_ID';

export const SET_CURRENT_DIRECTION = 'SET_CURRENT_DIRECTION';

export const SET_CURRENT_EXIT_ID = 'SET_CURRENT_EXIT_ID';

interface setCurrentLineAlias {
  type: typeof SET_CURRENT_LINE_ALIAS;
  payload: string;
}

interface setCurrentStationId {
  type: typeof SET_CURRENT_STATION_ID;
  payload: number | null;
}

interface setCurrentDirection {
  type: typeof SET_CURRENT_DIRECTION;
  payload: string;
}

interface setCurrentExitId {
  type: typeof SET_CURRENT_EXIT_ID;
  payload: string;
}

export type SerchInfoActionTypes = setCurrentLineAlias | setCurrentStationId | setCurrentDirection | setCurrentExitId;