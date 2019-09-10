import { Reducer } from 'redux'
import { SerchInfoState, SerchInfoActionTypes, SET_CURRENT_LINE_ALIAS, SET_CURRENT_STATION_ID, SET_CURRENT_DIRECTION, SET_CURRENT_EXIT_ID } from './types'

const initState: SerchInfoState = {
  currentLineAlias: '',
  currentStationId: null,
  currentDirection: '',
  currentExitId: ''
}

export const SerchInfoReducer: Reducer<SerchInfoState, SerchInfoActionTypes> = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_LINE_ALIAS:
      return { ...state, currentLineAlias: action.payload }
    case SET_CURRENT_STATION_ID:
      return { ...state, currentStationId: action.payload }
    case SET_CURRENT_DIRECTION:
      return { ...state, currentDirection: action.payload }
    case SET_CURRENT_EXIT_ID:
      return { ...state, currentExitId: action.payload }
    default:
      return state;
  }
}