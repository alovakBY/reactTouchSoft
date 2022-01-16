import { Routes, Route } from "react-router-dom";

import { CounterContainer } from "../pages/Counter/containers/CounterContainer";
import { SiteContainer } from "../pages/Site/containers/SiteContainer";

import { ROUTE_NAMES } from "./routeNames";

function Router() {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<div>Hello world</div>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.SITE} element={<SiteContainer />} />
    </Routes>
  );
}

export { Router };
