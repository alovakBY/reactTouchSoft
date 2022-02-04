import { useState, useCallback } from "react";

import { CounterView } from "../components/CounterView";

export const CounterContainer = () => {
  const [countValue, setCounterCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounterCount((state) => {
      state += 1;
      return state;
    });
  }, []);

  const handleDecrement = useCallback(() => {
    if (countValue > 0) {
      setCounterCount((state) => {
        state -= 1;
        return state;
      });
    }
  }, [countValue]);

  return (
    <CounterView
      countValue={countValue}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
};
