import React from "react";
import Query from "../Query";
import Item from './Item';

import ALBUMS_QUERY from "../../queries/album/albums";

const Albums = () => {
  return (
    <div>
      <Query query={ALBUMS_QUERY} id={null}>
        {({ data: { albums } }) => {
          return (
            <div>
              {albums.map((album, i) =>
                album.galery && album.galery.photos.length > 0 && <Item album={album} key={i} />
              )}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Albums;
