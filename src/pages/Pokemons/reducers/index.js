import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
    pokemons: [],
    isLoading: false,
    isErrors: null,
};

export const pokemonsReducer = handleActions(
    {
        [actions.GET_POKEMONS]: (state, { payload }) => {
            return {
                ...state,
                pokemons: [...payload],
            };
        },
    },
    initialState
);
