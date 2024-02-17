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
        <Typography variant="h2" fontSize={45} fontWeight={700} color="#e6e6e6">
          Catálogo
        </Typography>
      </Grid>
      <Grid padding={2}>
        <Cards />
      </Grid>
    </>
  );
}
