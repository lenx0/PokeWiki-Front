import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useEffect } from "react";

export default function Cards() {

  useEffect(() => {
    async function getPokemon() {
        let pokemon = await 
        console.log("pokemon", pokemon)
    }
    getPokemon()
}, [])
    return (
        <Card sx={{ maxWidth: 345 }}>
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