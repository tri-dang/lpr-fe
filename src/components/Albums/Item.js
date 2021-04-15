import React, { useState, useCallback, useMemo } from "react";
import { Row, Col, Modal } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Markdown from 'react-markdown';

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

const Zoom = ({ index, images, show, onHide, onClick, prevImage, nextImage }) => {
  const swipedHanders = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true
  });

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
          <KeyboardEventHandler
            handleFocusableElements
            handleKeys={['left']}
            onKeyEvent={prevImage} />
          <KeyboardEventHandler
            handleFocusableElements
            handleKeys={['right']}
            onKeyEvent={nextImage} />
        </div>
      </Modal>
  )
};

const getPrevIndex = (index, length) => index === 0 ? length - 1 : index - 1;
const getNextIndex = (index, length) => index === length - 1 ? 0 : index + 1;

const Item = ({ album: { galery: { images }, title, slug, cover, description }}) => {
  const carouselImages = useMemo(() => [cover, ...images], [cover, images]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnClick = (index) => {
    setSelectedIndex(index);
    //setSelectedImage(image);
    handleShow();
  };

  const prevImage = useCallback(
    () => setSelectedIndex(getPrevIndex(selectedIndex, carouselImages.length)),
    [selectedIndex, setSelectedIndex, carouselImages]
  );

  const nextImage = useCallback(
    () => setSelectedIndex(getNextIndex(selectedIndex, carouselImages.length)),
    [selectedIndex, setSelectedIndex, carouselImages]
  );

  return (
    <>
      <Zoom
        index={selectedIndex}
        images={carouselImages}
        show={show}
        onHide={handleClose}
        onClick={handleClose}
        nextImage={nextImage}
        prevImage={prevImage}
      />
      <Row>
        <Col>
          <h3>
            {title}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col md={6} style={{ cursor: 'pointer' }} onClick={() => handleOnClick(0)}>
          <Image image={cover} />
          <br/>
          <br/>
          <Markdown>
            {description}
          </Markdown>
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
