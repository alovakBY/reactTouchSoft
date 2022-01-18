import { combineReducers } from "redux";
import { countersManagerReducer } from "../pages/CountersManager/reducers";

export const rootReducer = combineReducers({
  countersManagerPage: countersManagerReducer,
});
