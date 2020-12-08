import React, { useState } from "react";
import { Row, Col, Modal } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';

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

const Zoom = ({ index, images, show, onHide, onClick, swipedHanders }) => {
  return (
      <Modal
        show={show}
        onHide={onHide}
        onClick={onHide}
        backdropClassName='laphotorouge-backdrop'
        contentClassName='laphotorouge-modal-content'
        centered>
        <div {...swipedHanders}>
          {
            images[index] && <Image image={images[index]}  />
          }
        </div>
      </Modal>
  )
};

const Item = ({ album: { galery: { images }, title, slug, cover }}) => {
  const carouselImages = [cover, ...images];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnClick = (index) => {
    setSelectedIndex(index);
    //setSelectedImage(image);
    handleShow();
  };

  const swipedHanders = useSwipeable({
    onSwipedLeft: () => setSelectedIndex(selectedIndex + 1),
    onSwipedRight: () => setSelectedIndex(selectedIndex - 1),
    trackMouse: true
  });

  return (
    <>
      <Zoom index={selectedIndex} images={carouselImages} show={show} onHide={handleClose} onClick={handleClose} swipedHanders={swipedHanders} />
      <Row>
        <Col>
          <h3>
            {title}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ margin: 'auto', cursor: 'pointer' }} onClick={() => handleOnClick(0)}>
          <Image image={cover} />
          <br/>
          <br/>
        </Col>
        <Col md={6}>
          <Row>
            {
              images.map((image, i) => <ImageItem image={image} onClick={() => handleOnClick(i + 1)} key={i} />
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
