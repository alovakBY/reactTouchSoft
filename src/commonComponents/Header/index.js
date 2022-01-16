import { NavLink } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import s from "../../styles/Header.module.css";

export function Header() {
  return (
    <div className={s.header}>
      {Object.entries(ROUTE_NAMES).map(([title, pathTo], i) => {
        return (
          <NavLink key={i} to={pathTo} style={{ marginRight: "10px" }}>
            {title}
          </NavLink>
        );
      })}
    </div>
  );
}
