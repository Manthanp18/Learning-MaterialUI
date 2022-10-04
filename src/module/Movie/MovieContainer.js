import React from "react";
import { useGetMovieListQuery } from "../../store/API/movie";
import Movie from "./Movie";
export const MovieContainer = () => {
  // console.log(useGetMovieListQuery());
  const { data, isLoading } = useGetMovieListQuery();

  return (
    <div>
      <Movie data={data} isLoading={isLoading} />
    </div>
  );
};
