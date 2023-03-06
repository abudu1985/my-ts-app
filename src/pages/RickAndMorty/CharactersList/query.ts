import { gql } from "@apollo/client";

export const QUERY_CHARACTERS_LIST = gql`
  query CharactersList($page: Int!) {
    characters(page: $page) {
      results {
        name
        status
        species
        gender
        id
      }
    }
  }
`;
