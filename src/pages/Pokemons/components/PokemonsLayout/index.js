import { Pokemons } from "../Pokemons";

export const PokemonsLayout = ({ handleGetPokemons, pokemons }) => {
    return (
        <div>
            <Pokemons handleGetPokemons={handleGetPokemons} />
        </div>
    );
};
