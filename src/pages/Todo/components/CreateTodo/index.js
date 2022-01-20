import { useState, useCallback, memo } from "react";

export const CreateTodo = memo(({ handleAddTodo }) => {
  const [textInput, setTextInput] = useState("");

  const handleChangeTextTodo = useCallback((e) => {
    setTextInput(e.target.value);
  });

  const handleCreateTodo = (e) => {
    e.preventDefault();
    handleAddTodo(textInput);
    setTextInput("");
  };

  return (
    <div style={{ padding: "5px" }}>
      <form>
        <input type="text" onChange={handleChangeTextTodo} value={textInput} />
        <button type="submit" onClick={handleCreateTodo}>
          Add todo
        </button>
      </form>
    </div>
  );
});
