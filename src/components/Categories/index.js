import React from 'react';
import { Row } from 'react-bootstrap';
import {Helmet} from "react-helmet";

import Query from "../Query";
import Item from './Item';
import CATEGORIES_QUERY from "../../queries/category/categories";

const Categories = () => {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Baby and family photography" />
        <meta property="og:type" content="Categories" />
        <meta property="og:url" content="https://www.laphotorouge.com/" />
        <meta property="og:image" content="https://res.cloudinary.com/dlgkecjjd/image/upload/v1606714969/small_DSC_5109_1_d2d1b54d4e.jpg" />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="La photo Rouge"/>
        <meta name="twitter:creator" content="La photo Rouge"/>
        <meta name="twitter:description" content="Baby and family photography with on demand or preset concepts"/>
      </Helmet>
      <Query query={CATEGORIES_QUERY}>
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
