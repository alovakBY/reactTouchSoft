import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CREATE_COUNTER, INCREMENT_COUNTER } from "../actions";

import { ManagerLayout } from "../components/ManagerLayout";

export const CounterManagerContainer = () => {
  const dispatch = useDispatch();

  const { counters } = useSelector((state) => state.countersManagerPage);

  const handleCreateCounter = useCallback(() => {
    dispatch(CREATE_COUNTER());
  }, []);

  const handleIncrement = useCallback((id) => {
    dispatch(INCREMENT_COUNTER(id));
  }, []);

  // const handleCreateCounter = useCallback(() => {
  //   const newCounter = {
  //     count: 0,
  //     id: uuidv4(),
  //   };

  //   setCounters((state) => [...state, newCounter]);
  // }, []);

  // const handleDeleteCounter = useCallback((id) => {
  //   setCounters((state) => {
  //     const stateCopy = [...state];
  //     const deleteCounterIndex = stateCopy.findIndex((counter) => {
  //       return counter.id === id;
  //     });

  //     stateCopy.splice(deleteCounterIndex, 1);

  //     const updatedCounters = stateCopy.map((counter) => {
  //       return {
  //         ...counter,
  //         count: counter.count % 2 !== 0 ? counter.count - 1 : counter.count,
  //       };
  //     });

  //     return updatedCounters;
  //   });
  // }, []);

  // const handleIncrement = useCallback((id) => {
  //   setCounters((state) => {
  //     return state.map((counter) => {
  //       return {
  //         ...counter,
  //         count: counter.id === id ? counter.count + 1 : counter.count,
  //       };
  //     });
  //   });
  // }, []);

  // const handleDecrement = useCallback((id) => {
  //   setCounters((state) => {
  //     return state.map((counter) => {
  //       return {
  //         ...counter,
  //         count: counter.id === id ? counter.count - 1 : counter.count,
  //       };
  //     });
  //   });
  // }, []);

  return (
    <div style={{ padding: "10px" }}>
      <ManagerLayout
        counters={counters}
        handleCreateCounter={handleCreateCounter}
        // handleDeleteCounter={handleDeleteCounter}
        handleIncrement={handleIncrement}
        // handleDecrement={handleDecrement}
      />
    </div>
  );
};
