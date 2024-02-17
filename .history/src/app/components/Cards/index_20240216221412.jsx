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
import PokemonCardSkeleton from "../Skeleton";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    async function getPokemon() {
      setLoading(true); // Ativar o estado de carregamento

      const limit = itemsPerPage;
      const offset = (page - 1) * itemsPerPage;
      const pokemonListResponse = await PokemonService.getPokemon(limit, offset);
      const totalPokemon = pokemonListResponse.count;
      setTotalPages(Math.ceil(totalPokemon / itemsPerPage));

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
      setLoading(false); // Desativar o estado de carregamento
    }
    getPokemon();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      <Grid container spacing={4}>
        {(loading || pokemonList.length === 0) && // Mostrar o esqueleto se estiver carregando ou se a lista de pokemons estiver vazia
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PokemonCardSkeleton />
            </Grid>
          ))}
        {!loading &&
          pokemonList.map((pokemon, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={index}>
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <button onClick={prevPage} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={nextPage} disabled={page === totalPages}>
          Próxima
        </button>
      </Box>
    </>
  );
}
