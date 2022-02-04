import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";

import { TodoLayout } from "../components/TodoLayout";

export function TodoManagerContainer() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosManagerPage);

  const handleAddTodo = useCallback((text) => {
    dispatch(actions.ADD_TODO(text));
  }, []);

  const handleDeleteTodo = useCallback((id) => {
    dispatch(actions.DELETE_TODO(id));
  }, []);

  const handleChangeTodo = useCallback((id) => {
    dispatch(actions.CHANGE_TODO(id));
  }, []);

  const handleSaveChangedText = useCallback((id, text) => {
    dispatch(
      actions.SAVE_CHANGED_TEXT({
        id,
        text,
      })
    );
  }, []);

  const handleCancelChangedText = useCallback((id) => {
    dispatch(actions.CANCEL_CHANGED_TEXT(id));
  }, []);

  return (
    <div>
      <TodoLayout
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleChangeTodo={handleChangeTodo}
        handleSaveChangedText={handleSaveChangedText}
        handleCancelChangedText={handleCancelChangedText}
      />
    </div>
  );
}
