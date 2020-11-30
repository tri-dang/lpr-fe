import gql from "graphql-tag";

const ALBUMS_QUERY = gql`
  query Albums {
    albums {
      id
      title
      slug
      cover {
        url
      }
      galery {
        title
        name
        images {
          url
        }
      }
    }
  }
`;

export default ALBUMS_QUERY;
