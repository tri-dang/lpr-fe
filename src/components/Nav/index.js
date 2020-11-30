import React from "react";
import Link from "../shared/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';

import Query from "../Query";
import META_BY_SLUG_QUERY from "../../queries/meta/metaBySlug";
import { linkStyles } from '../shared/Link';

const logoStyles = {
  width: '18vw',
  maxWidth: '70px'
};

const lineStyles = {
  marginBottom: 0
};

const contactContainerStyles = {
  textAlign: 'right',
  fontSize: 11,
  height: '18vw',
  maxHeight: '70px',
  margin: 'auto 0'
};

const Contact = () => (
  <div style={contactContainerStyles}>
    <p style={lineStyles}>
      <a href="tel:+84907054403" target="_blank" rel="noreferrer" style={linkStyles}>
        +84907054403
        &nbsp;
        <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
      </a>
    </p>
    <p style={lineStyles}>
      <a href="https://goo.gl/maps/X4YiWJvnVtnd4szp7" target="_blank" rel="noreferrer" style={linkStyles}>
        19 Street 46, Thao Dien, Dist 2, Ho Chi Minh
        &nbsp;
        <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
      </a>
    </p>
    <p style={lineStyles}>
      <a href="https://www.facebook.com/laphotorouge" target="_blank" rel="noreferrer" style={linkStyles}>
        @laphotorouge
        &nbsp;
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
      </a>
    </p>
    <p style={lineStyles}>
      <a href="https://www.instagram.com/la.photorouge" target="_blank" rel="noreferrer" style={linkStyles}>
        @la.photorouge
        &nbsp;
        <FontAwesomeIcon icon={["fab", "instagram-square"]} />
      </a>
    </p>
  </div>
);

const Nav = ({ logoMeta }) => (
  <Query query={META_BY_SLUG_QUERY} slug='logo' spinnerDisabled>
    {({ data: { metaBySlug } }) => {
      return (
        <>
          <Row>
            <Col xs={2} >
              <Link to='/'>
                <img src={metaBySlug.picture[0].url} style={logoStyles} alt={metaBySlug.name} />
              </Link>
            </Col>
            <Col xs={10} >
              <Contact />
            </Col>
          </Row>
          <br/>
        </>
      )
    }}
  </Query>
);

export default Nav;

