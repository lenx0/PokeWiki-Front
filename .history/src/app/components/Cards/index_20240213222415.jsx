import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
} from "@mui/material";
import PokemonService from "@/services/PokemonService";
import { capitalizeFirstLetter } from "@/services/utils/CapitalizeFirstLetter";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokemonListResponse = await PokemonService.getPokemon();
      const pokemonUrls = pokemonListResponse.results.map(
        (pokemon) => pokemon.url
      );
      const detailedPokemonList = await Promise.all(
        pokemonUrls.map(async (url) => {
          const pokemonDetailsResponse = await PokemonService.getPokemonDetails(
            url
          );
          return pokemonDetailsResponse;
        })
      );
      setPokemonList(detailedPokemonList);
    }
    getPokemon();
  }, []);

  return (
    <>
      <Grid container>
        {pokemonList.map((pokemon, index) => {
          console.log(pokemon);
          return (
            <Grid item xs={12} sm={6} md={4} key={index} padding={15}>
              <Card sx={{ maxWidth: 345, border: "none", boxShadow: "2px 4px 8px 6px rgba(0,0,0,0.2)" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
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
                    {/* <Typography variant="body2" color="text.secondary">
                      Habilidades:
                      {pokemon.abilities.map((ability, index) => (
                        <Typography key={index}>
                          {ability.ability.name}
                        </Typography>
                      ))}
                    </Typography> */}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
