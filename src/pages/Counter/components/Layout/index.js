import React, { memo } from "react";

import { CounterView } from "../../../Counter/components/CounterView";

const Layout = memo(({ counters }) => {
    return (
        <div style={{ padding: "5px" }}>
            {counters.map(({ count, id }) => {
                return <CounterView key={id} countValue={count} />;
            })}
            {/* <CounterView
        countValue={countValue}
        handleIncrement={handleIncrement}
        handleDicrement={handleDicrement}
      /> */}
        </div>
    );
});

export { Layout };
