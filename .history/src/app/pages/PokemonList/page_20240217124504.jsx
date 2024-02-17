import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <Grid container >
      <Grid
        item
        backgroundColor="#e93232ee"
        textAlign="center"
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
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
