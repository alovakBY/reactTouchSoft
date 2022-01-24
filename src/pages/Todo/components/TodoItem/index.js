import { memo, useState } from "react";

import s from "./TodoItem.module.css";

export const TodoItem = memo(
  ({
    text,
    id,
    isChanged,
    handleDeleteTodo,
    handleChangeTodo,
    handleSaveChangedText,
    handleCancelChangedText,
  }) => {
    const [changeText, setChangeText] = useState("");

    const handleChangeText = (e) => {
      setChangeText(e.target.value);
    };

    return isChanged ? (
      <div>
        <input
          type="text"
          autoFocus
          className={s.input}
          value={changeText}
          onChange={handleChangeText}
        />
        <button
          className={s.button}
          onClick={() => handleSaveChangedText(id, changeText)}
        >
          save
        </button>
        <button
          className={s.button}
          onClick={() => handleCancelChangedText(id)}
        >
          cancel
        </button>
      </div>
    ) : (
      <div>
        {text}
        <button className={s.button} onClick={() => handleChangeTodo(id)}>
          change
        </button>
        <button className={s.button} onClick={() => handleDeleteTodo(id)}>
          delete
        </button>
      </div>
    );
  }
);

{
  /* <div>
		  <input type='text'/>
		  <button>save</button>
		  </div> */
}

{
  /* <div>
      {text}
      <button className={s.button}>change</button>
      <button className={s.button} onClick={() => handleDeleteTodo(id)}>
        delete
      </button>
    </div> */
}
