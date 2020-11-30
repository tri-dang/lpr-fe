import React from "react";
import { Link } from "react-router-dom";

import Item from './Item';

const albumLinkStyle = {
  color: 'inherit',
  textDecoration: 'inherit'
};

const Albums = ({ albums }) => (
  <>
    {albums.map((album, i) =>
      album.galery && album.galery.photos.length > 0 &&
      <Link to={`/albums/${album.slug}`} style={albumLinkStyle}>
        <Item album={album} key={i} />
      </Link>
    )}
  </>
);

export default Albums;
