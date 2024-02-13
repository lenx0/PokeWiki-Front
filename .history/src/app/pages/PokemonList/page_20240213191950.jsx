import Cards from "@/app/components/Cards";

export default function PokemonList() {
    return (
        <Grid container >
            <Grid item  xs={12} sm={6}>
            <Cards />
            </Grid>
        </Grid>
    )
}