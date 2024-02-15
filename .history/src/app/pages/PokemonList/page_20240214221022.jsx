import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <>
      <Grid
        item
        backgroundColor="#e93232ee"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight={700} color="#e6e6e6">
          Catálogo
        </Typography>
      </Grid>
      <Grid container padding={10}>
        <Cards />
      </Grid>
    </>
  );
}
