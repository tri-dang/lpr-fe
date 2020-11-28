import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Spinner } from 'react-bootstrap';

const Query = ({ children, query, id, slug, spinnerDisabled }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id, slug: slug }
  });

  if (loading) {
    if (!spinnerDisabled) {
      return <Spinner animation="border" size="sm" />;
    }
    return null;
  }
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
