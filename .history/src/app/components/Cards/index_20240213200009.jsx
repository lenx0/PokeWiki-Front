import PokemonService from "@/services/PokemonService";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await PokemonService.getPokemon();
      const detailedPokemonList = await Promise.all(
        pokemon.results.map(async (poke) => {
          const details = await PokemonService.getPokemonDetails(poke.url);
          return {
            name: poke.name,
            details: details,
          };
        })
      );
      setPokemonList(detailedPokemonList);
    }
    if(!pokemonList) {
      getPokemon();
    }
    
  }, []);

  return (
    <>
      <Grid container>
        {pokemonList?.map((item, index) => {
          return (
            <Grid item  xs={12} sm={6} md={4} key={index} padding={15} >
              <Card sx={{ maxWidth: 345, border: '1px solid' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.details.sprites.front_default}
                alt={item.name}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  {item.details && (
                  <Typography variant="body2" color="text.secondary">
                    Height: {item.details.height} | Weight: {item.details.weight}
                  </Typography>
                )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
