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

  // useEffect(() => {
  //   async function getPokemon() {
  //     let pokemon = await PokemonService.getPokemon();
  //     setPokemonList(pokemon.results);
  //   }
  //   getPokemon();
  //   getPokemonDetails()
  // }, []);

  // const getPokemonDetails = async (url) => {
  //   const details = await PokemonService.getPokemonDetails(url);
  //   console.log("Detalhes do Pokémon:", details);
  // };

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await PokemonListService.getPokemon();
      const detailedPokemonList = await Promise.all(
        pokemon.results.map(async (poke) => {
          const details = await PokemonDetailsService.getPokemonDetails(poke.url);
          return {
            name: poke.name,
            details: details,
          };
        })
      );
      setPokemonList(detailedPokemonList);
    }
    getPokemon();
  }, []);

  return (
    <>
      <Grid container>
        {pokemonList?.map((item, index) => {
          return (
            <Grid item  xs={12} sm={6} md={4} key={index} padding={15} >
              <Card sx={{ maxWidth: 345, border: '1px solid' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.url}
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
