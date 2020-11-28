import React from "react";
import { Link } from "react-router-dom";

import Query from "../Query";
import META_BY_SLUG_QUERY from "../../queries/meta/metaBySlug";

const Nav = ({ logoMeta }) => (
  <Query query={META_BY_SLUG_QUERY} slug='logo' spinnerDisabled>
    {({ data: { metaBySlug } }) => {
      return (
        <>
          <Link to='/'>
            <img src={metaBySlug.picture[0].url} height='50' alt='' />
          </Link>
          <br/>
          <br/>
        </>
      )
    }}
  </Query>
);

export default Nav;

