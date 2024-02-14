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
        backgroundColor="#f14e4ed5"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight={700} color="#575353">Catálogo</Typography>
      </Grid>
      <Cards />
    </>
  );
}
