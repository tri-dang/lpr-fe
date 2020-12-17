import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories (sort: "position:asc") {
      id
      name
      slug
      position
      cover {
        formats
      }
    }
  }
`;

export default CATEGORIES_QUERY;
