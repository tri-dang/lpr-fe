import gql from "graphql-tag";

const META_BY_SLUG_QUERY = gql`
  query Metas($slug: String!) {
    metaBySlug(slug: $slug) {
      id
      name
      slug
      picture {
        url
      }
    }
  }
`;

export default META_BY_SLUG_QUERY;
