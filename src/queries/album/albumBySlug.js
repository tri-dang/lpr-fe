import gql from "graphql-tag";

const ALBUM_BY_SLUG_QUERY = gql`
  query Albums($slug: String!) {
    albumBySlug(slug: $slug) {
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

export default ALBUM_BY_SLUG_QUERY;
