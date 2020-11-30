import React from "react";
import { Row, Col } from 'react-bootstrap';

import { Photo } from '../shared/Photo';

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
            photos.slice(0, 3).map((photo, i) =>
              <Col md={4} sm={4} xs={4}>
                <Photo picture={photo.picture} title={photo.title}  />
              </Col>
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
