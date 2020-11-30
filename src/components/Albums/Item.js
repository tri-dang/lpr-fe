import React from "react";
import { Row, Col } from 'react-bootstrap';

import { Photo } from '../shared/Photo';

const photoContainerStyles = {
  margin: 'auto 0',
  paddingBottom: 45
};

const PhotoItem = ({ photo: { picture, title } }) => (
  <Col md={4} sm={4} xs={4} style={photoContainerStyles}>
    <Photo picture={picture} title={title}  />
  </Col>
);

const Item = ({ album: { galery: { photos }, title, slug, cover }}) => (
  <>
    <Row>
      <Col>
        <h3>
          {title}
        </h3>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Photo picture={cover}  />
        <br/>
        <br/>
      </Col>
      <Col md={6}>
        <Row>
          {
            photos.slice(0, 10).map((photo, i) =>
              <PhotoItem photo={photo} />
            )
          }
        </Row>
      </Col>
    </Row>
    <br/>
    <br/>
    <br/>
  </>
);

export default Item;
