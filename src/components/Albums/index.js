import React from "react";

import Item from './Item';

const Albums = ({ albums }) => (
  <>
    {albums.map((album, i) =>
      album.galery && album.galery.images.length > 0 &&
      <Item album={album} key={i} />
    )}
  </>
);

export default Albums;
