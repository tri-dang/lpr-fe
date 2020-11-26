import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import ALBUMS_QUERY from "../../queries/album/albums";

const Albums = () => {
  return (
    <div>
      <Query query={ALBUMS_QUERY} id={null}>
        {({ data: { albums } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {albums.map((album, i) =>
                      <div>
                        {album.title}
                        {
                          album.galery && album.galery.photos.map((photo) =>
                            <img src={photo.picture.url} alt=""/>)
                        }
                      </div>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Albums;
