import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import PokemonService from "@/services/PokemonService";
import { capitalizeFirstLetter } from "@/services/utils/CapitalizeFirstLetter";
import PokemonCardSkeleton from "../Skeleton";

const Pagination = ({
  page,
  totalPages,
  setPage,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  const handleChangeItemsPerPage = (event) => {
    const newItemsPerPage = parseInt(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setPage(1);
  };

  return (
    <Box
      mt={4}
      gap={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button variant="contained" onClick={goToFirstPage} disabled={page === 1}>
        Primeira
      </Button>
      <Button variant="contained" onClick={prevPage} disabled={page === 1}>
        Anterior
      </Button>
      <Typography variant="body1">
        Página {page} de {totalPages}
      </Typography>
      <Button
        variant="contained"
        onClick={nextPage}
        disabled={page === totalPages}
      >
        Próxima
      </Button>
      <Button
        variant="contained"
        onClick={goToLastPage}
        disabled={page === totalPages}
      >
        Última
      </Button>
      <Select
        value={itemsPerPage}
        onChange={handleChangeItemsPerPage}
        label="Itens por página"
        variant="outlined"
        style={{ marginLeft: 10 }}
      >
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={48}>48</MenuItem>
      </Select>
    </Box>
  );
};

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
      <Grid container spacing={4}>
        {(loading || pokemonList.length === 0) &&
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
        <Grid item lg={12}>
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
