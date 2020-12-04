import gql from "graphql-tag";

const CATEGORY_BY_SLUG_QUERY = gql`
  query Categories($slug: String!) {
    categoryBySlug(slug: $slug) {
      id
      name
      slug
      cover {
        formats
      }
      albums {
        id
        title
        slug
        cover {
          formats
        }
        galery {
          title
          name
          images {
            id
            formats
          }
        }
      }
    }
  }
`;

export default CATEGORY_BY_SLUG_QUERY;
