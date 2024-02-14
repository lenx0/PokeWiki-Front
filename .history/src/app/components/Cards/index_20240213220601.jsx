import React, { useEffect, useState, useMemo } from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import PokemonService from "@/services/PokemonService";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await PokemonService.getPokemon();
      setPokemonList(pokemon.results);
    }
    getPokemon();
  }, []);

  useEffect(() => {
    async function getPokemonDetails() {
      if (pokemonList.length > 0) {
        const detailedPokemonList = await Promise.all(
          pokemonList.map(async (poke) => {
            const details = await PokemonService.getPokemonDetails(poke.url);
            setPokemonDetails((prevDetails) => [...prevDetails, details]);
            return {
              name: poke.name,
              details: details,
            };
          })
        );
        setPokemonList(detailedPokemonList);
      }
    }
    getPokemonDetails();
  }, []);

  const abilities = useMemo(() => {
    return pokemonDetails.map((pokemon) =>
      pokemon.abilities.map((ability) => ability.ability.name)
    );
  }, [pokemonDetails]);

  return (
    <>
      <Grid container>
        {pokemonList.map((item, index) => {
          const itemDetails = pokemonDetails[index];
          return (
            <Grid item xs={12} sm={6} md={4} key={index} padding={15}>
              <Card sx={{ maxWidth: 345, border: "1px solid" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={
                    itemDetails &&
                    itemDetails.sprites.other["official-artwork"].front_default
                  }
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  {itemDetails && (
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Base Experience: {itemDetails.base_experience}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Abilities:
                      </Typography>
                      {abilities[index] &&
                        abilities[index].map((ability, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            color="text.secondary"
                          >
                            Ability {index + 1}: {ability}
                          </Typography>
                        ))}
                      <Typography variant="body2" color="text.secondary">
                        Height: {itemDetails.height} | Weight:{" "}
                        {itemDetails.weight}
                      </Typography>
                    </>
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
