import HttpClient from "./utils/HttpClient";

class PokemonService {
  async getPokemon(limit, offset) {
    const url = `${process.env.NEXT_PUBLIC_API_BASE}/pokemon/?limit=${limit}&offset=${offset}`;
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
      // Obtém a lista de Pokémon do tipo fornecido
      const response = await HttpClient.getData(`https://pokeapi.co/api/v2/type/${type}`);
      const pokemonUrls = response.pokemon.map(p => p.pokemon.url);
      
      // Obter os detalhes completos de cada Pokémon na lista de URLs
      const detailedPokemonList = await Promise.all(
        pokemonUrls.map(async (url) => {
          const pokemonDetailsResponse = await HttpClient.getData(url);
          console.log(pokemonDetailsResponse)
          return pokemonDetailsResponse;
          
        })
      );
  
      return detailedPokemonList;
    } catch (error) {
      console.error('Erro ao obter os detalhes dos pokémons por tipo:', error);
      throw error;
    }
  }
}

export default new PokemonService();
