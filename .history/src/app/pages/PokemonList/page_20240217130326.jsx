import { Box, Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <Grid container height={80}>
      <Grid
        item
        backgroundColor="#272626eb"
        textAlign="center"
        width="100vw"
        
      >
        <Typography variant="h2" fontSize={35} fontWeight={700} color="#ffffff">
          Catálogo
        </Typography>
      </Grid>
      <Grid item>
        <Cards />
      </Grid>
    </Grid>
  );
}
