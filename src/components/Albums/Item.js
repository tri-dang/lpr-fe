import React, { useState } from "react";
import { Row, Col, Modal } from 'react-bootstrap';

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

const Zoom = ({ show, onHide, image, onClick  }) => {
  return (
    <Modal show={show} onHide={onHide} onClick={onHide} centered>
      {
        image && <Image image={image}  />
      }
    </Modal>
  )
};

const Item = ({ album: { galery: { images }, title, slug, cover }}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnClick = (image) => {

    setSelectedImage(image);
    handleShow();
  };

  return (
    <>
      <Zoom image={selectedImage} show={show} onHide={handleClose} onClick={handleClose} />
      <Row>
        <Col>
          <h3>
            {title}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ margin: 'auto', cursor: 'pointer' }} onClick={() => handleOnClick(cover)}>
          <Image image={cover} />
        </Col>
        <Col md={6}>
          <Row>
            {
              images.map((image, i) => <ImageItem image={image} onClick={handleOnClick} />
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
