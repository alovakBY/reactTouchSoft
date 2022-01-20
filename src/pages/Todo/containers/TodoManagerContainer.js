import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../actions";

import { TodoLayout } from "../components/TodoLayout";

export function TodoManagerContainer() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosManagerPage);

  const handleAddTodo = useCallback((text) => {
    dispatch(ADD_TODO(text));
  }, []);

  return (
    <div>
      {todos.map(({ text }, index) => {
        return (
          <div>
            <div>
              {index + 1}. {text}
            </div>
          </div>
        );
      })}
      <TodoLayout handleAddTodo={handleAddTodo} />
    </div>
  );
}
