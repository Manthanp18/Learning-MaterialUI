import React from "react";
import CardContainer from "../../common/Card/CardContainer";
const Movie = ({ data }) => {
  return (
    <div>
      <CardContainer data={data} />
    </div>
  );
};

export default Movie;
