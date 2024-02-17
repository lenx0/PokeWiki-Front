import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <Grid container >
      <Grid item>
        <Cards />
      </Grid>
    </Grid>
  );
}
