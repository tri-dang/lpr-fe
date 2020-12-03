import React from "react";
import { Row, Col } from 'react-bootstrap';

import Image from '../shared/Image';
import Thumbnail from '../shared/Thumbnail';

const photoContainerStyles = {
  margin: 'auto 0',
  paddingBottom: 45
};

const ImageItem = ({ image }) => (
  <Col md={4} sm={4} xs={4} style={photoContainerStyles}>
    <Thumbnail image={image}  />
  </Col>
);

const Item = ({ album: { galery: { images }, title, slug, cover }}) => (
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
        <Image image={cover}  />
        <br/>
        <br/>
      </Col>
      <Col md={6}>
        <Row>
          {
            images.slice(0, 9).map((image, i) =>
              <ImageItem image={image} />
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
