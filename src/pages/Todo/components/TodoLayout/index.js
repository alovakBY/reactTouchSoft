import { TodoItem } from "../TodoItem";
import { CreateTodo } from "../CreateTodo";

export const TodoLayout = ({
  todos,
  handleDeleteTodo,
  handleAddTodo,
  handleChangeTodo,
  handleSaveChangedText,
  handleCancelChangedText,
}) => {
  return (
    <div>
      <CreateTodo handleAddTodo={handleAddTodo} />
      {todos.map(({ text, id, isChanged }) => {
        return (
          <TodoItem
            isChanged={isChanged}
            key={id}
            text={text}
            id={id}
            handleDeleteTodo={handleDeleteTodo}
            handleChangeTodo={handleChangeTodo}
            handleSaveChangedText={handleSaveChangedText}
            handleCancelChangedText={handleCancelChangedText}
          />
        );
      })}
    </div>
  );
};
