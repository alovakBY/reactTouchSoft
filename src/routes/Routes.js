import { Routes, Route } from "react-router-dom";

import { CounterContainer } from "../pages/Counter/containers/CounterContainer";
import { CounterManagerContainer } from "../pages/CountersManager/containers/CounterManagerContainer";
import { SiteContainer } from "../pages/Site/containers/SiteContainer";

import { ROUTE_NAMES } from "./routeNames";

function Router() {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTERS_MANAGER}
        element={<CounterManagerContainer />}
      />
      <Route path={ROUTE_NAMES.SITE} element={<SiteContainer />} />
    </Routes>
  );
}

export { Router };
