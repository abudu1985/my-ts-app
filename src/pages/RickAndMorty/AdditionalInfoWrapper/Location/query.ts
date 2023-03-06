import { gql } from "@apollo/client";

export const QUERY_LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      name
      dimension
      type
      residents {
        name
        id
      }
    }
  }
`;
