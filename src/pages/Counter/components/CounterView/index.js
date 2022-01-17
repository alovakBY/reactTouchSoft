import { memo } from "react";

import s from "./CounterView.module.css";

export const CounterView = memo(
  ({
    countValue,
    handleDeleteCounter,
    id,
    handleIncrement,
    handleDecrement,
  }) => {
    return (
      <div className={s.counter}>
        <div className={s.screen}>{countValue}</div>
        {countValue % 2 === 0 ? (
          <div className={`${s.parity} + ${s.parityTrue}`}>
            Введено четное число
          </div>
        ) : (
          <div className={`${s.parity} + ${s.parityFalse}`}>
            Введено нечетное число
          </div>
        )}
        <div className={s.buttons}>
          <button
            className={s.button}
            onClick={() => handleDecrement(id)}
            disabled={countValue === 0}
          >
            -
          </button>
          <button className={s.button} onClick={() => handleDeleteCounter(id)}>
            Delete
          </button>
          <button className={s.button} onClick={() => handleIncrement(id)}>
            +
          </button>
        </div>
      </div>
    );
  }
);
