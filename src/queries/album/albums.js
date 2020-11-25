import gql from "graphql-tag";

const ALBUMS_QUERY = gql`
  query Albums {
    albums {
      id
      title
      seo
    }
  }
`;

export default ALBUMS_QUERY;
