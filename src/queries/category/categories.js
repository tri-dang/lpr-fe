import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      slug
      cover {
        formats
      }
    }
  }
`;

export default CATEGORIES_QUERY;
