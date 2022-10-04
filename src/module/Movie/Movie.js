import React from "react";
import CardContainer from "../../common/Card/CardContainer";
const Movie = ({ data, isLoading }) => {
  return (
    <div>
      <CardContainer data={data} isLoading={isLoading} />
    </div>
  );
};

export default Movie;
