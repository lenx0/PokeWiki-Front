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
        backgroundColor="#161616d2"
        textAlign="center"
      >
        <Typography variant="h2" fontWeight={700} color="#e6e6e6">Catálogo</Typography>
      </Grid>
      <Box>
      <Cards />
      </Box>
    </>
  );
}
