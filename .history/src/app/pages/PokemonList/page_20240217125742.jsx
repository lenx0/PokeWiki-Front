import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <Grid container >
      <Grid
        item
        backgroundColor="#272626eb"
        textAlign="center"
        width="100vw"
        height={100}
      >
        <Typography variant="h2" fontSize={45} fontWeight={700} color="#e6e6e6">
          Catálogo
        </Typography>
      </Grid>
      <Grid item>
        <Cards />
      </Grid>
    </Grid>
  );
}
