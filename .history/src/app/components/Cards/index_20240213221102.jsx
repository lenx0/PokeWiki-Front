import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import PokemonService from "@/services/PokemonService";

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
          return (
            <Grid item xs={12} sm={6} md={4} key={index} padding={15}>
              <Card sx={{ maxWidth: 345, border: "1px solid" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={
                    pokemon.sprites.other["official-artwork"].front_default
                  }
                  alt={pokemon.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Base Experience: {pokemon.base_experience}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Height: {pokemon.height} | Weight: {pokemon.weight}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Abilities:
                    {pokemon.abilities.map((ability, index) => (
                      <span key={index}>
                        {index > 0 && ", "}
                        {ability.ability.name}
                      </span>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
