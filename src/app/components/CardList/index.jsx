import React, { useState } from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { capitalizeFirstLetter } from "@/services/utils/CapitalizeFirstLetter";

const defaultImageUrl =
  "https://th.bing.com/th/id/OIG4.T4sk0RpKKWpw2XSkbO_C?w=1024&h=1024&rs=1&pid=ImgDetMain";

const CardList = ({ pokemon, animationMode, onClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 240,
        border: "none",
        boxShadow: "2px 4px 8px 8px rgba(0,0,0,0.2)",
        cursor:"pointer"
      }}
      onClick={() => onClick()}
    >
      <CardMedia
        component="img"
        style={
          animationMode && !imageError
            ? {
                height: 100,
                width: 200,
                objectFit: "scale-down",
                objectPosition: "center",
              }
            : {}
        }
        image={
          !imageError &&
          pokemon?.sprites.other[animationMode ? "showdown" : "official-artwork"]
            .front_default
            ? pokemon.sprites.other[
                animationMode ? "showdown" : "official-artwork"
              ].front_default
            : defaultImageUrl
        }
        alt={pokemon?.name}
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
      />
      <CardContent>
        <Box textAlign="center">
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="700"
            component="div"
          >
            {capitalizeFirstLetter(pokemon?.name)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Número: {pokemon?.order}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Altura: {pokemon?.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Peso: {pokemon?.weight}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardList;
