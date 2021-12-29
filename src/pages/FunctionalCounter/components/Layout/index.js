import React, { memo } from "react";

import { CounterView } from "../../../Counter/components/CounterView";

const Layout = memo(({ countValue, handleIncrement, handleDicrement }) => {
    return (
        <div>
            <CounterView
                countValue={countValue}
                handleIncrement={handleIncrement}
                handleDicrement={handleDicrement}
            />
        </div>
    );
});

export { Layout };
