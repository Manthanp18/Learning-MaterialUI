import React from "react";
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
// import useStyle from "./style";
// import Item from "@mui/material/Item"
const CardContainer = ({ data }) => {
  console.log(data);
  return (
    <>
      <Grid
        container
        sx={{ paddingLeft: 10, paddingY: 15 }}
        spacing={{ xs: 2, sm: 4, md: 7 }}
        rows={{ md: 4 }}
        columns={{ xs: 2, sm: 8, md: 12 }}>
        {data?.results.map((el, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
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
    </>
  );
};

export default CardContainer;
