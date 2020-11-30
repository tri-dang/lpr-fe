import React from 'react';
import styled from 'styled-components';
import { Row, Col, Carousel } from 'react-bootstrap';
import Image from '../shared/Image';

const StyledRow = styled(Row)`
  height: calc((100vw - 30px) * 3 / 4);
  background: black;
  @media(max-width: 768px) {
    height: calc((100vw - 30px) * 3 / 2) !important;
  }
`;

const Slide = ({ album: { galery: { images }, title, slug, cover }}) => (
  <>
    <Row className="justify-content-md-center">
      <Col md={6}>
        <h3>
        {title}
        </h3>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md={6}>
        <Carousel>
          {
            images.map((image, i) =>
              <Carousel.Item key={i}>
                <StyledRow>
                  <Col style={{ margin: 'auto 0' }}>
                    <Image image={image}  />
                  </Col>
                </StyledRow>
              </Carousel.Item>
            )
          }
        </Carousel>
      </Col>
    </Row>
  </>
);

export default Slide;
