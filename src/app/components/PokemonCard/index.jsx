import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { capitalizeFirstLetter } from "@/services/utils/CapitalizeFirstLetter";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card
      sx={{
        maxWidth: 245,
        border: "none",
        boxShadow: "2px 4px 8px 8px rgba(0,0,0,0.2)",
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        image={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Box textAlign="center">
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="700"
            component="div"
          >
            {capitalizeFirstLetter(pokemon.name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Número: {pokemon.order}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Altura: {pokemon.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Peso: {pokemon.weight}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
