import { memo } from "react";

const CounterView = memo(({ countValue, handleIncrement, handleDicrement }) => {
    console.log("render");
    return (
        <div>
            <div>Value: {countValue}</div>
            <div>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDicrement}>-</button>
            </div>
        </div>
    );
});

export { CounterView };
