import { TodoItem } from "../TodoItem";
import { CreateTodo } from "../CreateTodo";

export const TodoLayout = ({ handleAddTodo, handleChangeTextTodo }) => {
  return (
    <div>
      <CreateTodo handleAddTodo={handleAddTodo} />
    </div>
  );
};
