import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <Grid container textAlign="center" justifyContent="center" alignContent="center">
      <Grid
        item
        backgroundColor="#272626eb"
        textAlign="center"
        width="100vw"
        height={80}
      >
        <Typography variant="h2" fontSize={45} fontWeight={700} color="#ffffff">
          Catálogo
        </Typography>
      </Grid>
      <Grid item>
        <Cards />
      </Grid>
    </Grid>
  );
}
