import Cards from "@/app/components/Cards";
import { useEffect } from "react";


export default function PokemonList() {
    
    useEffect(() => {
        async function getPokemon() {
            let pokemon = await PokemonListService.getPokemon()
            console.log("pokemon", pokemon)
        }
    }, [])

    
    return (
        <Cards />
    )
}