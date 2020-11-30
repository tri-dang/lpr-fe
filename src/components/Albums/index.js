import React from "react";
import Link from "../shared/Link";

import Item from './Item';

const Albums = ({ albums }) => (
  <>
    {albums.map((album, i) =>
      album.galery && album.galery.photos.length > 0 &&
      <Link to={`/albums/${album.slug}`}>
        <Item album={album} key={i} />
      </Link>
    )}
  </>
);

export default Albums;
