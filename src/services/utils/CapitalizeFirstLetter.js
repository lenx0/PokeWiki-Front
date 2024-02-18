export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  export const capitalizePokemonNames = (pokemonList) => {
    return pokemonList.map((pokemon) => ({
      ...pokemon,
      name: capitalizeFirstLetter(pokemon.name),
    }));
  };

