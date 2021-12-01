import React from "react";
import { useParams } from "react-router";
import { Fragment } from "react/cjs/react.production.min";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>QuoteDetail Page</h1>
      <p>{params.quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetail;
