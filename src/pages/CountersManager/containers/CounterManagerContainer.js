import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CREATE_COUNTER,
  DELETE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from "../actions";

import { ManagerLayout } from "../components/ManagerLayout";

export const CounterManagerContainer = () => {
  const dispatch = useDispatch();

  const { counters } = useSelector((state) => state.countersManagerPage);

  const handleCreateCounter = useCallback(() => {
    dispatch(CREATE_COUNTER());
  }, []);

  const handleDeleteCounter = useCallback((id) => {
    dispatch(DELETE_COUNTER(id));
  }, []);

  const handleIncrement = useCallback((id) => {
    dispatch(INCREMENT_COUNTER(id));
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch(DECREMENT_COUNTER(id));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <ManagerLayout
        counters={counters}
        handleCreateCounter={handleCreateCounter}
        handleDeleteCounter={handleDeleteCounter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
