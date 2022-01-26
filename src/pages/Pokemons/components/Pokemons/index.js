import { memo } from "react";
import { NavLink } from "react-router-dom";

export const Pokemons = memo(({ name }) => {
    return (
        <div>
            <NavLink to={`${name}`}>{name}</NavLink>
        </div>
    );
});
