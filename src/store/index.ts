import { combineReducers, createStore, Dispatch } from "redux";
import { SerchInfoReducer } from "./serchInfoState/reducer";
import { SerchInfoActionTypes } from "./serchInfoState/types";

const rootReducer = combineReducers({
  serchInfoState: SerchInfoReducer
})

export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>

export type AppDispathTypes = Dispatch<SerchInfoActionTypes>;
