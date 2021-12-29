import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Layout } from "../components/Layout";

function FunctionalCounterContainer() {
    const [count, setCountValue] = useState(0);
    const [date, setDate] = useState(new Date().getMilliseconds());

    const user = useMemo(
        () => ({
            name: "Lesha",
            age: 25,
        }),
        []
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().getMilliseconds());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleIncrement = useCallback(() => {
        setCountValue((state) => state + 1);
    }, []);

    const handleDicrement = useCallback(() => {
        if (count > 0) {
            setCountValue((state) => state - 1);
        }
    }, [count]);

    console.log(date);
    return (
        <div style={{ padding: "10px" }}>
            <Layout
                countValue={count}
                handleIncrement={handleIncrement}
                handleDicrement={handleDicrement}
                user={user}
            />
        </div>
    );
}

export { FunctionalCounterContainer };
