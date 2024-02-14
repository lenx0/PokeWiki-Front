import HttpClient from "./utils/HttpClient";

class PokemonService {
  async getPokemon() { 
    const response = await HttpClient.getData(process.env.NEXT_PUBLIC_API_BASE);
    return response
  }
  async getPokemonDetails() {
    const response = await HttpClient.getData(process.env.NEXT_PUBLIC_API_BASE);
    return response;
  }
}

export default new PokemonService()
