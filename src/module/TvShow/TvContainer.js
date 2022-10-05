import React from "react";
import { useGetTvListQuery } from "../../store/API/tv";
import TvShow from "./Tv";
import { Grid } from "@mui/material";
import CardSkeleton from "../../common/Skeleton/CardSkeleton";
export const TvContainer = () => {
  const { data, isLoading } = useGetTvListQuery();
  // console.log(data);
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
    <div>
      <TvShow data={data} />
    </div>
  );
};
