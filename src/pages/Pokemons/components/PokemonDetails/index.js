import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../../../hooks/useFetching";

import api from "../../api/config";
import { getPokemonDetails } from "../../services";

export const PokemonDetails = memo(() => {
    const { pokemon } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});
    const { response, isLoading, errors } = useFetching(() => {
        return getPokemonDetails(pokemon);
    });

    // useEffect(() => {
    //     if (pokemon === undefined) {
    //         setPokemonDetails({});
    //         return;
    //     }
    //     pokemon &&
    //         setPokemonDetails({
    //             name: response.name,
    //             image: response.sprites.other["official-artwork"].front_default,
    //         });
    // }, [pokemon]);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div>{response?.name}</div>
                    {/* <img
                        src={
                            response?.sprites.other["official-artwork"]
                                .front_default
                        }
                    ></img> */}
                </div>
            )}
        </div>
    );
});
