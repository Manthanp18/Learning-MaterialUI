import React from "react";
import { useGetMovieListQuery } from "../../store/API/movie";
import Movie from "./Movie";
export const MovieContainer = () => {
  const { data, isLoading } = useGetMovieListQuery();
  // console.log(data);

  return (
    <div>
      <Movie data={data} />
    </div>
  );
};
