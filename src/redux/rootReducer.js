import { combineReducers } from "redux";
import { countersManagerReducer } from "../pages/CountersManager/reducers";
import { todosManagerReducer } from "../pages/Todo/reducers";
import { pokemonsReducer } from "../pages/Pokemons/reducers";

export const rootReducer = combineReducers({
    countersManagerPage: countersManagerReducer,
    todosManagerPage: todosManagerReducer,
    pokemonsPage: pokemonsReducer,
});
