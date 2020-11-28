import React from "react";

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

export default Category;
