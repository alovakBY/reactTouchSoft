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
        isChanged: false,
      };
      if (payload === "") {
        return {
          ...copy,
        };
      } else {
        return {
          ...copy,
          todos: [newTodo, ...copy.todos],
        };
      }
    },
    [actions.DELETE_TODO]: (state, { payload }) => {
      const copyTodos = [...state.todos];
      const index = copyTodos.findIndex((todo) => {
        return todo.id === payload;
      });
      copyTodos.splice(index, 1);
      return {
        ...state,
        todos: copyTodos,
      };
    },
    [actions.CHANGE_TODO]: (state, { payload }) => {
      const copy = [...state.todos];

      return {
        ...state,
        todos: copy.map((todo) => {
          return todo.id === payload
            ? {
                ...todo,
                isChanged: true,
              }
            : todo;
        }),
      };
    },
    [actions.SAVE_CHANGED_TEXT]: (state, { payload }) => {
      const copy = state.todos;
      const updatetodos = copy.map((todo) => {
        return todo.id === payload.id
          ? {
              ...todo,
              text: payload.text,
              isChanged: false,
            }
          : {
              ...todo,
            };
      });
      return {
        ...state,
        todos: [...updatetodos],
      };
    },
    [actions.CANCEL_CHANGED_TEXT]: (state, { payload }) => {
      const copy = [...state.todos];
      const updateTodos = copy.map((todo) => {
        return todo.id === payload
          ? { ...todo, isChanged: false }
          : { ...todo };
      });
      return {
        ...state,
        todos: updateTodos,
      };
    },
  },
  initialState
);
