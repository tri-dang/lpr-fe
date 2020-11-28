import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      slug
      cover {
        url
      }
    }
  }
`;

export default CATEGORIES_QUERY;
