import HttpClient from "./utils/HttpClient";

class PokemonService {
  async getPokemon(limit, offset) {
    const url = `${process.env.NEXT_PUBLIC_API_BASE}?limit=${limit}&offset=${offset}`;
    const response = await HttpClient.getData(url);
    return response;
  }

  async getPokemonDetails(url) {
    const response = await HttpClient.getData(url);
    return response;
  }

  async getPokemonByName(filterName) {
    const url = `${process.env.NEXT_PUBLIC_API_BASE}/${filterName}`;
    console.log("filterName:", filterName)
    const response = await HttpClient.getData(url);
    return response;
  }
}

export default new PokemonService();
