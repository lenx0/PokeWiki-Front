import HttpClient from "./utils/HttpClient";

class PokemonService {
    async getPokemonBy() {
        return HttpClient.getData(
            process.env.NEXT_PUBLIC_API_BASE
        )
    }
}