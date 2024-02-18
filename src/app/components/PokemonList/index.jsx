"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";

import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import TableRowsIcon from "@mui/icons-material/TableRows";
import GridViewIcon from "@mui/icons-material/GridView";

import PokemonService from "@/services/PokemonService";
import PokemonCardSkeleton from "../Skeleton";
import Pagination from "../Pagination";
import Filter from "../Filter";
import CardList from "../CardList";
import GridList from "../GridList";
import Image from "next/image";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");
  const [changeToGrid, setChangeToGrid] = useState(false);
  const [changeToCard, setChangeToCard] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeViewModeToGrid = () => {
    setChangeToGrid(true);
    setChangeToCard(false);
  };

  const changeViewModeToCard = () => {
    setChangeToGrid(false);
    setChangeToCard(true);
  };

  const applyFilters = async () => {
    setLoading(true);
    try {
      let filteredPokemonList = [];
      if (filterName.trim() !== "") {
        const result = await PokemonService.getPokemonByName(filterName);
        filteredPokemonList = [result];
        setTotalPages(1);
        setPage(1);
      }
      if (filterType) {
        const result = await PokemonService.getPokemonByTypeDetails(filterType);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        filteredPokemonList = result.slice(startIndex, endIndex);
        setTotalPages(Math.ceil(result.length / itemsPerPage));
      }
      setPokemonList(filteredPokemonList);
    } catch (error) {
      console.error("Erro ao aplicar filtros:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setFilterName("");
    setFilterType("");
    setPage(1);
    setItemsPerPage(12);
    setTotalPages(pokemonList.count);
    setPokemonList([]);
  };

  useEffect(() => {
    getPokemon();
  }, [page, itemsPerPage]);

  useEffect(() => {
    if (pokemonList.length === 0) {
      getPokemon();
    }
  }, [pokemonList]);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const response = await PokemonService.getPokemonAllTypes();
        const types = response.results.map((type) => type.name);
        setPokemonTypes(types);
      } catch (error) {
        console.error("Error fetching Pokemon types:", error);
      }
    }
    fetchTypes();
  }, []);

  async function getPokemon() {
    setLoading(true);
    let pokemonListResponse;
    let totalPokemon;
    let detailedPokemonList;

    try {
      const limit = itemsPerPage;
      const offset = (page - 1) * itemsPerPage;

      if (filterType) {
        pokemonListResponse = await PokemonService.getPokemonByTypeDetails(
          filterType
        );
        totalPokemon = pokemonListResponse.length;
        setTotalPages(Math.ceil(totalPokemon / itemsPerPage));

        const startIndex = offset;
        const endIndex = Math.min(offset + itemsPerPage, totalPokemon);
        detailedPokemonList = pokemonListResponse.slice(startIndex, endIndex);
      } else {
        pokemonListResponse = await PokemonService.getPokemon(limit, offset);
        totalPokemon = pokemonListResponse.count;
        setTotalPages(Math.ceil(totalPokemon / itemsPerPage));

        const pokemonUrls = pokemonListResponse.results.map(
          (pokemon) => pokemon.url
        );
        detailedPokemonList = await Promise.all(
          pokemonUrls.map(async (url) => {
            const pokemonDetailsResponse =
              await PokemonService.getPokemonDetails(url);
            return pokemonDetailsResponse;
          })
        );
      }

      setPokemonList(detailedPokemonList);
    } catch (error) {
      console.error("Erro ao obter Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }

  const filterProps = {
    filterName,
    setFilterName,
    filterType,
    setFilterType,
    pokemonTypes,
    applyFilters,
    clearFilters,
    drawerOpen,
    toggleDrawer,
  };

  return (
    <>
      <Grid container py={2} pr={4} pl={4} justifyContent="space-between">
        <Grid item xl={6} textAlign="left">
          <IconButton variant="contained" onClick={changeViewModeToCard}>
            <GridViewIcon />
          </IconButton>
          <IconButton variant="contained" onClick={changeViewModeToGrid}>
            <TableRowsIcon />
          </IconButton>
          <Button
            variant="contained"
            style={{
              borderRadius: "50%",
              width: 60,
              height: 60,
              marginRight: "10px",
            }}
          >
            <Image
              src={
                pokemonList[0]?.sprites.other["official-artwork"].front_default
              }
              width={40}
              height={40}
            />
          </Button>
          <Button
            variant="contained"
            style={{
              borderRadius: "50%",
              width: 60,
              height: 60,
              padding: 0,
            }}
          >
            <Image
              src={pokemonList[0]?.sprites.other["showdown"].front_default}
              width={40}
              height={40}
            />
          </Button>
        </Grid>
        <Grid item xl={6} textAlign="right">
          <IconButton variant="contained" onClick={toggleDrawer}>
            <FilterListRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Filter {...filterProps} />
      <Grid container>
        {(loading || pokemonList.length === 0) &&
          Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} py={2} key={index}>
              <PokemonCardSkeleton />
            </Grid>
          ))}
        {!loading && changeToGrid && (
          <Grid item xs={12}>
            <GridList
              pokemonList={pokemonList}
              loading={loading}
              page={page}
              itemsPerPage={itemsPerPage}
              totalPages={totalPages}
              onPageChange={setPage}
              onPageSizeChange={setItemsPerPage}
            />
          </Grid>
        )}
        {!loading &&
          changeToCard &&
          pokemonList.map((pokemon, index) => (
            <Grid
              container
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={index}
              justifyContent="center"
              py={2}
            >
              <CardList pokemon={pokemon} />
            </Grid>
          ))}
        {changeToCard && (
          <Grid item lg={12} xs={12}>
            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}
