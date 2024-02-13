import PokemonListService from "@/services/PokemonListService";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Cards() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    async function getPokemon() {
        let pokemon = await PokemonListService.getPokemon();
        setPokemonList(pokemon.results)
    }
    getPokemon()
}, [])
    return (
      <>
      <div>teste</div>
      {pokemonList?.map((item, index) => {
        console.log('item', item)
        return (
          <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.url}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        )
        
      })}
        
    </>
    )
}