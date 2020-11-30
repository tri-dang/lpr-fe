import React from "react";
import { useParams } from "react-router";

import Query from "../Query";
import Slide from './Slide';
import ALBUM_BY_SLUG_QUERY from "../../queries/album/albumBySlug";

const Album = ({ slug }) => (
  <Query query={ALBUM_BY_SLUG_QUERY} slug={slug}>
    {({ data: { albumBySlug } }) =>
      <Slide album={albumBySlug} />
    }
  </Query>
);

const RoutedComponent = () => {
  let { slug } = useParams();
  return (
    <Album slug={slug} />
  )
};

export { RoutedComponent };
export default Album;

