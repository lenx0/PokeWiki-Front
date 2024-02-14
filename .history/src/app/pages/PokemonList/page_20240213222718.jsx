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
        backgroundColor="#6d1717d2"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight={700} color="#db2121">Catálogo</Typography>
      </Grid>
      <Cards />
    </>
  );
}
