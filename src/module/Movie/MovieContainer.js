import React from "react";
import { useGetMovieListQuery } from "../../store/API/movie";
import Movie from "./Movie";
import { Grid } from "@mui/material";
import CardSkeleton from "../../common/Skeleton/CardSkeleton";
export const MovieContainer = () => {
  // console.log(useGetMovieListQuery());
  const { data, isLoading } = useGetMovieListQuery();
  if (isLoading === true) {
    return (
      <>
        <Grid container spacing={6} paddingY={15} paddingX={3}>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </Grid>
      </>
    );
  }
  return (
    <>
      <Movie data={data} />
    </>
  );
};
