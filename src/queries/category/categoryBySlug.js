import gql from "graphql-tag";

const CATEGORY_BY_SLUG_QUERY = gql`
  query Categories($slug: String!) {
    categoryBySlug(slug: $slug) {
      id
      name
      slug
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
            picture {
              formats
              url
            }
          }
        }
      }
    }
  }
`;

export default CATEGORY_BY_SLUG_QUERY;
