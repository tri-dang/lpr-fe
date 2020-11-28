import React from "react";
import { useParams } from "react-router";

import Query from "../Query";
import Albums from '../Albums';
import CATEGORY_BY_SLUG_QUERY from "../../queries/category/categoryBySlug";

const Category = ({ slug }) => (
  <Query query={CATEGORY_BY_SLUG_QUERY} slug={slug}>
    {({ data: { categoryBySlug: { albums } } }) =>
      <Albums albums={albums} />
    }
  </Query>
);

const RoutedComponent = () => {
  let { slug } = useParams();
  return (
    <Category slug={slug} />
  )
};

export { RoutedComponent };
export default Category
