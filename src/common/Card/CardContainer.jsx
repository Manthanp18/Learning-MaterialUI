import React from "react";
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
// import useStyle from "./style";
// import Item from "@mui/material/Item"
const CardContainer = ({ data }) => {
  console.log(data);
  return (
    <Grid container spacing={2} paddingY={15}>
      {data?.results.map((el, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <MovieCard
            img={el.poster_path}
            title={el.original_title}
            releaseDate={el.release_date}
            tvShowDate={el.first_air_date}
            tvShowName={el.name}
            vote={el.vote_average}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
