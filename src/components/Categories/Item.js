import React from "react";
import { Col, Card } from 'react-bootstrap';

const titleStyles = {
  color: 'white',
  position: 'absolute',
  bottom: 0,
  left: '30px'
};

const containerStyles = {
  marginBottom: 30,
  cursor: 'pointer'
};

const Item = ({ category: { cover, name } }) => (
  <Col md={6} sm={12} style={containerStyles}>
    <Card.Img src={cover.url} alt={name} />
    <Card.ImgOverlay>
      <Card.Title style={titleStyles}>{name}</Card.Title>
    </Card.ImgOverlay>
  </Col>
);

export default Item;
