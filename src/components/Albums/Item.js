import React from "react";
import { Row, Col } from 'react-bootstrap';

const Photo = ({ picture }) =>
  picture && <img src={picture.url} alt="" width="100%" />;

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
      </Col>
      <Col md={6}>
        <Row>
          {
            photos.slice(0, 3).map((photo, i) =>
              <Col md={4}>
                <Photo picture={photo.picture}  />
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
