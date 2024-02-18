import HttpClient from "./utils/HttpClient";

class PokemonService {
  async getPokemon(limit, offset) {
    const url = `${process.env.NEXT_PUBLIC_API_BASE}/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await HttpClient.getData(url);
    return response;
  }

  async getPokemonAllTypes() {
    const url = `${process.env.NEXT_PUBLIC_API_BASE}/type`;
    const response = await HttpClient.getData(url);
    return response;
  }

  async getPokemonDetails(url) {
    const response = await HttpClient.getData(url);
    return response;
  }

  async getPokemonByName(filterName) {
    const url = `${process.env.NEXT_PUBLIC_API_BASE}/pokemon/${filterName}`;
    const response = await HttpClient.getData(url);
    return response;
  }

  async getPokemonByTypeDetails(type) {
    try {
      const response = await HttpClient.getData(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      const pokemonUrls = response.pokemon.map((p) => p.pokemon.url);

      const detailedPokemonList = await Promise.all(
        pokemonUrls.map(async (url) => {
          const pokemonDetailsResponse = await HttpClient.getData(url);
          return pokemonDetailsResponse;
        })
      );

      return detailedPokemonList;
    } catch (error) {
      console.error("Erro ao obter os detalhes dos pokémon por tipo:", error);
      throw error;
    }
  }
}

export default new PokemonService();
