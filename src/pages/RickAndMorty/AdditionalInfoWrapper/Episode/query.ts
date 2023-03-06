import { gql } from "@apollo/client";

export const QUERY_EPISODE = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      episode
      name
      air_date
      characters {
        name
        id
      }
    }
  }
`;
