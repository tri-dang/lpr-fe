import React from "react";
import { useParams } from "react-router";
import { Row, Col, Carousel } from 'react-bootstrap';

import Query from "../Query";
import ALBUM_BY_SLUG_QUERY from "../../queries/album/albumBySlug";
import { Photo } from '../shared/Photo';

const Content = ({ album: { galery: { photos }, title, slug, cover }}) => (
  <>
    <Row className="justify-content-md-center">
      <Col md={6}>
        <h3>
          {title}
        </h3>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col sm={12} md={6}>
        <Carousel>
          {
            photos.map((photo, i) =>
              <Carousel.Item key={i}>
                <Row style={{ height: 'calc((100vw - 30px) * 3 / 2)', background: 'black' }}>
                  <Col xs={12} style={{ margin: 'auto 0' }}>
                    <Photo picture={photo.picture} title={photo.title}  />
                  </Col>
                </Row>
              </Carousel.Item>
            )
          }
        </Carousel>
      </Col>
    </Row>
  </>
);

const Album = ({ slug }) => (
  <Query query={ALBUM_BY_SLUG_QUERY} slug={slug}>
    {({ data: { albumBySlug } }) =>
      <Content album={albumBySlug} />
    }
  </Query>
);

const RoutedComponent = () => {
  let { slug } = useParams();
  return (
    <Album slug={slug} />
  )
};

export { RoutedComponent };
export default Album;

