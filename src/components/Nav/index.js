import React from "react";
import { Link } from "react-router-dom";

import Query from "../Query";
import META_BY_SLUG_QUERY from "../../queries/meta/metaBySlug";

const logoStyles = {
  width: '15vw',
  maxWidth: '100px'
};

const Nav = ({ logoMeta }) => (
  <Query query={META_BY_SLUG_QUERY} slug='logo' spinnerDisabled>
    {({ data: { metaBySlug } }) => {
      return (
        <>
          <Link to='/'>
            <img src={metaBySlug.picture[0].url} style={logoStyles} alt={metaBySlug.name} />
          </Link>
          <br/>
          <br/>
        </>
      )
    }}
  </Query>
);

export default Nav;

