import Cards from "@/app/components/Cards";
import { Grid, Typography } from "@mui/material";

export default function PokemonList() {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        backgroundColor="#f14e4ed5"
        textAlign="center"
      >
        <Typography variant="h2">Lista Pokémon</Typography>
      </Grid>
      <Cards />
    </>
  );
}
