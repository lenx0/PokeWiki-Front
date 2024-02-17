"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
  Button,
} from "@mui/material";

import PokemonService from "@/services/PokemonService";
import { capitalizeFirstLetter } from "@/services/utils/CapitalizeFirstLetter";
import PokemonCardSkeleton from "../Skeleton";
import Pagination from "../Pagination";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    async function getPokemon() {
      setLoading(true);

      const limit = itemsPerPage;
      const offset = (page - 1) * itemsPerPage;
      const pokemonListResponse = await PokemonService.getPokemon(
        limit,
        offset
      );
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
      setLoading(false);
    }
    getPokemon();
  }, [page, itemsPerPage]);

  return (
    <>
      <Grid container py={2} justifyContent="center">
        <Grid item>
          <Button variant="contained">Filtro</Button>
        </Grid>
      </Grid>
      <Grid
        container
        xl={12}
        lg={12}
        
      >
        {(loading || pokemonList.length === 0) &&
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <Grid item xl={12} lg={12} xs={12} sm={6} md={4} key={index}>
              <PokemonCardSkeleton />
            </Grid>
          ))}
        {!loading &&
          pokemonList.map((pokemon, index) => (
            <Grid
              container
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={2}
              key={index}
              justifyContent="center"
              py={2}
              
            >
              <Grid item>
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
            </Grid>
          ))}
        <Grid item lg={12} xs={12}>
          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
        </Grid>
      </Grid>
    </>
  );
}
