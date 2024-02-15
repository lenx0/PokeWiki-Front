import HttpClient from "./utils/HttpClient";

class PokemonService {
  async getPokemon(url, filter, page, rowsPerPage) { 
    const response = await HttpClient.getData(process.env.NEXT_PUBLIC_API_BASE);
    return response
  }
  async getPokemonDetails(url) {
    const response = await HttpClient.getData(url);
    return response;
  }
}

export default new PokemonService()
