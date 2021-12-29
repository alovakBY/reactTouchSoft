import { Routes, Route } from "react-router-dom";
import { CounterContainer } from "../pages/Counter/containers/CounterContainer";
import { FunctionalCounterContainer } from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import { ROUTE_NAMES } from "./routeNames";

function Router() {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<div>Hello world</div>} />
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
            <Route
                path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
                element={<FunctionalCounterContainer />}
            />
        </Routes>
    );
}

export { Router };
