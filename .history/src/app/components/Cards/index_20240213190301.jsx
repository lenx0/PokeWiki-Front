import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useEffect } from "react";
import { PokemonListService } from "@services/PokemonListService";

export default function Cards() {

  useEffect(() => {
    async function getPokemon() {
        let pokemon = await PokemonListService.getPokemon()
        console.log("pokemon", pokemon)
    }
}, [])
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}