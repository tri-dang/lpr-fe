import React from 'react';
import { Row } from 'react-bootstrap';

import Query from "../Query";
import Item from './Item';
import CATEGORIES_QUERY from "../../queries/category/categories";
import mock from "./mock";

const Categories = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} mock={mock}>
        {({ data: { categories } }) => {
          return (
            <Row>
              {categories.map((category, i) =>
                 <Item category={category} key={i} />
              )}
            </Row>
          );
        }}
      </Query>
    </div>
  );
};

export default Categories;
