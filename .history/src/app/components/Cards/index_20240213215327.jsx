import { useEffect, useMemo, useState } from "react";

import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

import PokemonService from "@/services/PokemonService";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [abilities, setAbilities] = useState([])

  const getAbilities = useMemo(() => {
      return pokemonDetails.map((item) => ({
      ...abilities,
      name: item[0].ability.name    
      }))
    

  }, [])

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await PokemonService.getPokemon();
      const detailedPokemonList = await Promise.all(
        pokemon.results.map(async (poke) => {
          const details = await PokemonService.getPokemonDetails(poke.url);
          // console.log('Pokemon Details', details);
          setPokemonDetails(details)
          return {
            name: poke.name,
            details: details,
          };
        })
      );
      setPokemonList(detailedPokemonList);
    }
    getPokemon()
    
  }, []);

  

  return (
    <>
      <Grid container>
        {pokemonList?.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index} padding={15}>
              <Card sx={{ maxWidth: 345, border: "1px solid" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={item.details.sprites.other["official-artwork"].front_default}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  {item.details && (
                    <Typography variant="body2" color="text.secondary">
                      Height: {item.details.height} | Weight:{" "}
                      {item.details.weight}
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
