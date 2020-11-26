import gql from "graphql-tag";

const ALBUMS_QUERY = gql`
  query Albums {
    albums {
      id
      title
      slug
      galery {
        title
        name
        photos {
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
