import { useFetching } from "../../../hooks/useFetching";

import { Pokemons } from "../components/Pokemons";
import { PokemonDetails } from "../components/PokemonDetails";

import { getPokemons } from "../services";

export const PokemonsContainer = () => {
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
                    <div>
                        <PokemonDetails />
                    </div>
                </div>
            )}
        </div>
    );
};
