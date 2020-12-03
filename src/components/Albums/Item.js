import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';

import Image from '../shared/Image';
import Thumbnail from '../shared/Thumbnail';

const photoContainerStyles = {
  margin: 'auto 0',
  paddingBottom: 30,
  cursor: 'pointer'
};

const ImageItem = ({ image, onClick }) => (
  <Col md={4} sm={4} xs={4} style={photoContainerStyles} onClick={() => onClick(image)}>
    <Thumbnail image={image}  />
  </Col>
);

const Item = ({ album: { galery: { images }, title, slug, cover }}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      <Row>
        <Col>
          <h3>
            {title}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ margin: 'auto' }}>
          <Image image={selectedImage || cover}  />
          <br/>
          <br/>
        </Col>
        <Col md={6}>
          <Row>
            {
              images.map((image, i) =>
                image.id === selectedImage.id ?
                  <ImageItem image={cover} onClick={setSelectedImage} />
                  :
                  <ImageItem image={image} onClick={setSelectedImage} />
              )
            }
          </Row>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
    </>
  )
};

export default Item;
