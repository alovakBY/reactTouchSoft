import { combineReducers } from "redux";
import { countersManagerReducer } from "../pages/CountersManager/reducers";
import { todosManagerReducer } from "../pages/Todo/reducers";

export const rootReducer = combineReducers({
  countersManagerPage: countersManagerReducer,
  todosManagerPage: todosManagerReducer,
});
