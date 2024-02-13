import Cards from "@/app/components/Cards";


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