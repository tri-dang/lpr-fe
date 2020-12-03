import React from "react";
import { Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

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

const Item = ({ category: { cover, name, slug } }) => (
  <Col md={6} sm={12} style={containerStyles}>
    <Link to={`/categories/${slug}`} className="uk-link-reset">
      <Card.Img src={cover.formats.large.url} alt={name} />
      <Card.ImgOverlay>
        <Card.Title style={titleStyles}>{name}</Card.Title>
      </Card.ImgOverlay>
    </Link>
  </Col>
);

export default Item;
