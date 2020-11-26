import gql from "graphql-tag";

const ALBUMS_QUERY = gql`
  query Albums {
    albums {
      id
      title
      slug
    }
  }
`;

export default ALBUMS_QUERY;
