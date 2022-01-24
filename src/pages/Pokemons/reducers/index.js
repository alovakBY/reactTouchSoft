import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = [];

export const pokemonsReducer = handleActions({
  [actions.GET_POKEMONS]: (state, payload) => {},
});
