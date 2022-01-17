import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { Layout } from "../components/Layout";

function CounterContainer() {
    const [counters, setCounters] = useState([]);

    const handleCreateCounter = useCallback(() => {
        console.log(counters);
        const id = uuidv4();
        const newCounter = {
            count: 0,
            id,
        };
        setCounters([...counters, newCounter]);
    });

    // const handleIncrement = useCallback(() => {
    //   setCountValue((state) => state + 1);
    // }, []);

    // const handleDicrement = useCallback(() => {
    //   if (count > 0) {
    //     setCountValue((state) => state - 1);
    //   }
    // }, [count]);

    return (
        <div style={{ padding: "10px" }}>
            <button onClick={handleCreateCounter}>Add counter</button>
            <Layout
                counters={counters}
                // handleIncrement={handleIncrement}
                // handleDicrement={handleDicrement}
            />
        </div>
    );
}

export { CounterContainer };
