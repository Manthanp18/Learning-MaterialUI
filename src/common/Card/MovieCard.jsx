import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";
import { PercentageCircle } from "./style";
import { maxHeight } from "@mui/system";

export default function MovieCard({
  img,
  title,
  releaseDate,
  tvShowDate,
  tvShowName,
  vote,
  // isLoading,
}) {
  const [loader, setLoader] = useState(true);
  const avg = (vote * 100) / 10;
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  // console.log(isLoading);
  return (
    <Card
      sx={{
        // maxWidth: ,
        width: "100%",
        height: 290,
        position: "relative",
        borderRadius: "8px",
        maxWidth: "300px",
      }}>
      {loader ? (
        <Skeleton
          variant="rectangle"
          width={345}
          height={175}
          animation="wave"
          position="relative"
          borderRadius="8px"
        />
      ) : (
        <CardMedia
          component="img"
          alt="skeleton"
          height="180"
          animation="wave"
          image={`https://image.tmdb.org/t/p/w300/${img}`}
        />
      )}
      {loader ? (
        <Skeleton
          varient="circle"
          width="40px"
          height="40px"
          borderRadius="50px"
        />
      ) : (
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
      )}

      <CardContent>
        {loader ? (
          <Typography varient="h7">
            <Skeleton varient="text" width="100%" animation="wave" />
          </Typography>
        ) : (
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            fontFamily="inherit"
            fontWeight="bold"
            sx={{ marginTop: 2 }}>
            {title ? title : tvShowName}
          </Typography>
        )}
        {loader ? (
          <Typography varient="h7">
            <Skeleton varient="text" width="100%" animation="wave" />
          </Typography>
        ) : (
          <Typography
            variant="body3"
            color="text.secondary"
            sx={{
              typography: { sm: "body3", xs: "body3" },
              letterSpacing: "1px",
            }}>
            {releaseDate ? releaseDate : tvShowDate}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
