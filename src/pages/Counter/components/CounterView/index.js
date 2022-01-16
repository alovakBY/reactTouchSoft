import s from "./CounterView.module.css";

export const CounterView = ({
  countValue,
  handleIncrement,
  handleDicrement,
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
        <button className={s.button} onClick={handleDicrement}>
          -
        </button>
        <button className={s.button} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};
