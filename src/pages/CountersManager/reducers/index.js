import { handleActions } from "redux-actions";
import { v4 as uuidv4 } from "uuid";

import * as actions from "../actions";

const initialState = {
  counters: [],
};

export const countersManagerReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = {
        count: 0,
        id: uuidv4(),
      };

      return {
        ...state,
        counters: [...state.counters, newCounter],
      };
    },
    [actions.DELETE_COUNTER]: (state, { payload }) => {
      const copy = [...state.counters];
      const index = copy.findIndex((counter) => {
        return counter.id === payload;
      });
      copy.splice(index, 1);
      return {
        ...state,
        counters: copy,
      };
    },
    [actions.INCREMENT_COUNTER]: (state, { payload }) => {
      return {
        ...state,
        counters: state.counters.map((counter) => {
          counter.id === payload
            ? (counter.count += 1)
            : (counter.count = counter.count);
          return counter;
        }),
      };
    },
    [actions.DECREMENT_COUNTER]: (state, { payload }) => {
      return {
        ...state,
        counters: state.counters.map((counter) => {
          counter.id === payload
            ? (counter.count -= 1)
            : (counter.count = counter.count);
          return counter;
        }),
      };
    },
  },
  initialState
);
