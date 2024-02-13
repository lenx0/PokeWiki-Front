import Cards from "@/app/components/Cards";
import { Grid, Typography } from "@mui/material";

export default function PokemonList() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Typography variant="h2">Lista Pokémon</Typography>
      </Grid>
      <Cards />
    </Grid>
  );
}
