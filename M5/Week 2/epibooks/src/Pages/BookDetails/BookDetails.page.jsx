import React from "react";
import { useParams } from "react-router";

const BookDetails = () => {
  let params = useParams();

  return <div>BookDetails {JSON.stringify(params)}</div>;
};

export default BookDetails;
