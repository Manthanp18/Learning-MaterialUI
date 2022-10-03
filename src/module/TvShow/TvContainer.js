import React from "react";
import { useGetTvListQuery } from "../../store/API/tv";
import TvShow from "./Tv";
export const TvContainer = () => {
  const { data, isLoading } = useGetTvListQuery();
  console.log(data);
  return (
    <div>
      <TvShow data={data} />
    </div>
  );
};
