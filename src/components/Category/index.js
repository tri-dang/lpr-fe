import React from "react";
import { useParams } from "react-router";
import MetaTags from 'react-meta-tags';

import Query from "../Query";
import Albums from '../Albums';
import CATEGORY_BY_SLUG_QUERY from "../../queries/category/categoryBySlug";

const Category = ({ slug }) => (
  <Query query={CATEGORY_BY_SLUG_QUERY} slug={slug}>
    {({ data: { categoryBySlug: { albums, name, cover } } }) =>
    <>
      <MetaTags>
        <meta property="og:title" content={name} />
        <meta property="og:type" content="Category" />
        <meta property="og:url" content={`https://www.laphotorouge.com/categories/${slug}`} />
        <meta property="og:image" content={cover.formats.thumbnail.url} />

        <meta name="twitter:card" content={cover.formats.thumbnail.url}/>
        <meta name="twitter:site" content="La photo Rouge"/>
        <meta name="twitter:title" content={name}/>
        <meta name="twitter:description" content={name}/>
        <meta name="twitter:creator" content="La photo Rouge"/>
        <meta property="twitter:image:src" content={cover.formats.thumbnail.url} />
      </MetaTags>
      <Albums albums={albums} />
    </>
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
