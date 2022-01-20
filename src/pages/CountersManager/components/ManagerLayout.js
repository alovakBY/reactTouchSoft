import React from "react";

import { CounterView } from "../../Counter/components/CounterView";

export const ManagerLayout = ({
  counters,
  handleCreateCounter,
  handleDeleteCounter,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <div>
        <button onClick={handleCreateCounter}>Add counter</button>
      </div>
      <div style={{ padding: "5px", display: "flex", flexWrap: "wrap" }}>
        {counters.map(({ count, id }) => {
          return (
            <CounterView
              key={id}
              id={id}
              countValue={count}
              handleDeleteCounter={handleDeleteCounter}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          );
        })}
      </div>
    </div>
  );
};
