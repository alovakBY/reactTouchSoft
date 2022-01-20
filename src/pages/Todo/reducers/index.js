import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  todos: [],
};

export const todosManagerReducer = handleActions(
  {
    [actions.ADD_TODO]: (state, { payload }) => {
      const copy = {
        ...state,
      };
      const newTodo = {
        id: uuid(),
        text: payload,
      };
      return {
        ...state,
        todos: [...copy.todos, newTodo],
      };
    },
  },
  initialState
);
