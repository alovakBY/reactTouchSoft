import React, { useState, useCallback } from "react";

import { Layout } from "../components/Layout";

function FunctionalCounterContainer() {
    const [count, setCountValue] = useState(0);

    const handleIncrement = useCallback(() => {
        setCountValue((state) => state + 1);
    }, []);

    const handleDicrement = useCallback(() => {
        if (count > 0) {
            setCountValue((state) => state - 1);
        }
    }, [count]);

    return (
        <div style={{ padding: "10px" }}>
            <Layout
                countValue={count}
                handleIncrement={handleIncrement}
                handleDicrement={handleDicrement}
            />
        </div>
    );
}

export { FunctionalCounterContainer };
