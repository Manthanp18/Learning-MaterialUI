import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { PercentageCircle } from "./style";

export default function MovieCard({
  img,
  title,
  releaseDate,
  tvShowDate,
  tvShowName,
  vote,
}) {
  const avg = (vote * 100) / 10;
  return (
    <Card sx={{ maxWidth: 250, height: 290, position: "relative" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={`https://image.tmdb.org/t/p/w300/${img}`}
      />
      <PercentageCircle
        sx={{
          border: "2px solid green",
          ...(avg > 0 &&
            avg < 80 && {
              border: "2px solid yellow",
            }),
        }}>
        {avg.toFixed(0) + "%"}
      </PercentageCircle>
      <CardContent>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          fontFamily="inherit"
          fontWeight="bold"
          sx={{ marginTop: 2 }}>
          {title ? title : tvShowName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {releaseDate ? releaseDate : tvShowDate}
        </Typography>
      </CardContent>
    </Card>
  );
}
