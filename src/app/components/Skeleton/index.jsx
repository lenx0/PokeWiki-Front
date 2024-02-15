import React from "react";
import { Card, CardContent, Typography, Skeleton } from "@mui/material";

export default function PokemonCardSkeleton() {
  return (
    <Card sx={{ maxWidth: 345, border: "none" }}>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Skeleton />
        </Typography>
      </CardContent>
    </Card>
  );
}
