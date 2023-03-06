import { gql } from "@apollo/client";

export const QUERY_CHARACTER_PROFILE = gql`
  query CharacterProfile($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
        id
      }
      image
      episode {
        episode
        id
      }
      type
    }
  }
`;
