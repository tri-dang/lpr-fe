import React from "react";
import { useParams } from "react-router";

import Query from "../Query";
import ALBUM_BY_SLUG_QUERY from "../../queries/album/albumBySlug";
import { Photo } from '../shared/Photo';

const Content = ({ album: { cover } }) =>
  <Photo picture={cover}  />


const Album = ({ slug }) => (
  <Query query={ALBUM_BY_SLUG_QUERY} slug={slug}>
    {({ data: { albumBySlug } }) =>
      <Content album={albumBySlug} />
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

