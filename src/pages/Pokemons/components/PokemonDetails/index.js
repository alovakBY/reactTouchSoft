import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../../../hooks/useFetching";

import api from "../../api/config";
import { getPokemonDetails } from "../../services";

export const PokemonDetails = memo(() => {
    const { pokemon } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});
    const { response, isLoading, errors } = useFetching(
        () => getPokemonDetails(pokemon),
        pokemon
    );

    return (
        <div style={{ position: "fixed", top: 30, left: 200 }}>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1
                        style={{
                            fontSize: 32,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        {response?.name}
                    </h1>
                    <img
                        src={
                            response?.sprites.other["official-artwork"]
                                .front_default
                        }
                    ></img>
                </div>
            )}
        </div>
    );
});
