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
        photos {
          title
          picture {
            formats
            url
          }
        }
      }
    }
  }
`;

export default ALBUMS_QUERY;
