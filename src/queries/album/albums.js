import gql from "graphql-tag";

const ALBUMS_QUERY = gql`
  query Albums {
    Albums {
      id
      title
      seo
      photos
    }
  }
`;

export default ALBUMS_QUERY;
