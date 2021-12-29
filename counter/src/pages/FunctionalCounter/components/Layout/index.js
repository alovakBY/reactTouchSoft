import React, { memo } from "react";

import { CounterView } from "../../../Counter/components/CounterView";

const Layout = memo(
    ({ countValue, handleIncrement, handleDicrement, user }) => {
        console.log("Layout");
        return (
            <div>
                <CounterView
                    countValue={countValue}
                    handleIncrement={handleIncrement}
                    handleDicrement={handleDicrement}
                />
                <div>
                    {user.name} - {user.age}
                </div>
            </div>
        );
    }
);

export { Layout };
