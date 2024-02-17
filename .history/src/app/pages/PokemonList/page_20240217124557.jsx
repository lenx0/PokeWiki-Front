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
        sm={12}
        md={12}
        lg={12}
        xl={12}
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
