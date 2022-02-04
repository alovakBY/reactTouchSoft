import { useFetching } from "../../../hooks/useFetching";

import { Pokemons } from "../components/Pokemons";
import { PokemonDetails } from "../components/PokemonDetails";

import { getPokemons } from "../services";
import { useParams } from "react-router-dom";

export const PokemonsContainer = () => {
    const { pokemon } = useParams();
    const { response, isLoading, errors } = useFetching(getPokemons);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div style={{ padding: 10, display: "flex" }}>
                    <div>
                        {response?.results.map(({ name, url }) => {
                            return <Pokemons key={url} name={name} />;
                        })}
                    </div>
                    <div>{pokemon && <PokemonDetails />}</div>
                </div>
            )}
        </div>
    );
};
