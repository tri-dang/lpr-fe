import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import ALBUMS_QUERY from "../../queries/album/albums";

const Nav = () => {
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
                      <Link to="/">Strapi Blog</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {albums.map((album, i) => {
                      return (
                        <li key={album.id}>
                          <Link
                            to={`/album/${album.id}`}
                            className="uk-link-reset"
                          >
                            {album.title}
                          </Link>
                        </li>
                      );
                    })}
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

export default Nav;
