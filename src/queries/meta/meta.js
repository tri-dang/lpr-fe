import gql from "graphql-tag";

const META_QUERY = gql`
  query Metas($id: ID!) {
    meta(id: $id) {
      id
      name
      slug
      picture {
        url
      }
    }
  }
`;

export default META_QUERY;
