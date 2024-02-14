import { Grid, Typography } from "@mui/material";

import Cards from "@/app/components/Cards";

export default function PokemonList() {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        backgroundColor="#000000d4"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight={700} color="#bdfa2f">Catálogo</Typography>
      </Grid>
      <Cards />
    </>
  );
}
