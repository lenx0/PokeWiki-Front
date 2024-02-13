import Cards from "@/app/components/Cards";
import { Grid } from "@mui/material";

export default function PokemonList() {
    return (
        <Grid container >
            <Grid item  xs={12} sm={6}>
            <Cards />
            </Grid>
        </Grid>
    )
}