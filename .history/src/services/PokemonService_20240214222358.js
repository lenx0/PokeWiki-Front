import HttpClient from "./utils/HttpClient";

class PokemonService {
  async getPokemon(page) {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}?page=${page}&pageSize=20`;
      const response = await HttpClient.getData(url, filter, page);
      return response;
    } catch (error) {
      console.error("Erro ao obter os dados dos Pokémon:", error);
      throw error;
    }
  }
  async getPokemonDetails(url) {
    const response = await HttpClient.getData(url);
    return response;
  }
}

export default new PokemonService()
