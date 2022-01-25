import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PokemonsLayout } from "../components/PokemonsLayout";

import * as actions from "../actions";
import api from "../api/config";

export const PokemonsContainer = () => {
    const pokemons = useSelector(({ pokemonsPage }) => {
        return pokemonsPage.pokemons;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { data } = await api.get("/pokemon");
            dispatch(actions.GET_POKEMONS(data.results));
        })();
    }, []);

    return (
        <div>
            <PokemonsLayout pokemons={pokemons} />
        </div>
    );
};
