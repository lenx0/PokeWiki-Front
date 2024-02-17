import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <Grid container xl={12} lg={12} xs={12} sm={6} md={4}>
      <Grid item backgroundColor="#e93232ee" textAlign="center" >
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
