import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../../common/Card/MovieCard";
const Movie = ({ data, isLoading }) => {
  return (
    <Grid container spacing={6} paddingY={15} paddingX={3}>
      {data?.results.map((el, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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

export default Movie;
