import { ROUTE_NAMES } from "../../routes/routeNames";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <div>
            {Object.entries(ROUTE_NAMES).map(([title, pathTo], i) => {
                return (
                    <NavLink
                        key={i}
                        to={pathTo}
                        style={{ marginRight: "10px" }}
                    >
                        {title}
                    </NavLink>
                );
            })}
        </div>
    );
}
