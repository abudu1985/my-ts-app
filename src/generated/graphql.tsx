import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type EpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', episode?: string | null, name?: string | null, air_date?: string | null, characters: Array<{ __typename?: 'Character', name?: string | null, id?: string | null } | null> } | null };

export type LocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', name?: string | null, dimension?: string | null, type?: string | null, residents: Array<{ __typename?: 'Character', name?: string | null, id?: string | null } | null> } | null };

export type CharacterProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CharacterProfileQuery = { __typename?: 'Query', character?: { __typename?: 'Character', name?: string | null, status?: string | null, species?: string | null, gender?: string | null, image?: string | null, type?: string | null, origin?: { __typename?: 'Location', name?: string | null } | null, location?: { __typename?: 'Location', name?: string | null, id?: string | null } | null, episode: Array<{ __typename?: 'Episode', episode?: string | null, id?: string | null } | null> } | null };

export type CharactersListQueryVariables = Exact<{
  page: Scalars['Int'];
}>;


export type CharactersListQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', name?: string | null, status?: string | null, species?: string | null, gender?: string | null, id?: string | null } | null> | null } | null };


export const EpisodeDocument = gql`
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

/**
 * __useEpisodeQuery__
 *
 * To run a query within a React component, call `useEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEpisodeQuery(baseOptions: Apollo.QueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
      }
export function useEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
        }
export type EpisodeQueryHookResult = ReturnType<typeof useEpisodeQuery>;
export type EpisodeLazyQueryHookResult = ReturnType<typeof useEpisodeLazyQuery>;
export type EpisodeQueryResult = Apollo.QueryResult<EpisodeQuery, EpisodeQueryVariables>;
export const LocationDocument = gql`
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

/**
 * __useLocationQuery__
 *
 * To run a query within a React component, call `useLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLocationQuery(baseOptions: Apollo.QueryHookOptions<LocationQuery, LocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationQuery, LocationQueryVariables>(LocationDocument, options);
      }
export function useLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationQuery, LocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationQuery, LocationQueryVariables>(LocationDocument, options);
        }
export type LocationQueryHookResult = ReturnType<typeof useLocationQuery>;
export type LocationLazyQueryHookResult = ReturnType<typeof useLocationLazyQuery>;
export type LocationQueryResult = Apollo.QueryResult<LocationQuery, LocationQueryVariables>;
export const CharacterProfileDocument = gql`
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

/**
 * __useCharacterProfileQuery__
 *
 * To run a query within a React component, call `useCharacterProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterProfileQuery(baseOptions: Apollo.QueryHookOptions<CharacterProfileQuery, CharacterProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacterProfileQuery, CharacterProfileQueryVariables>(CharacterProfileDocument, options);
      }
export function useCharacterProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterProfileQuery, CharacterProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacterProfileQuery, CharacterProfileQueryVariables>(CharacterProfileDocument, options);
        }
export type CharacterProfileQueryHookResult = ReturnType<typeof useCharacterProfileQuery>;
export type CharacterProfileLazyQueryHookResult = ReturnType<typeof useCharacterProfileLazyQuery>;
export type CharacterProfileQueryResult = Apollo.QueryResult<CharacterProfileQuery, CharacterProfileQueryVariables>;
export const CharactersListDocument = gql`
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

/**
 * __useCharactersListQuery__
 *
 * To run a query within a React component, call `useCharactersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersListQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCharactersListQuery(baseOptions: Apollo.QueryHookOptions<CharactersListQuery, CharactersListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharactersListQuery, CharactersListQueryVariables>(CharactersListDocument, options);
      }
export function useCharactersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharactersListQuery, CharactersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharactersListQuery, CharactersListQueryVariables>(CharactersListDocument, options);
        }
export type CharactersListQueryHookResult = ReturnType<typeof useCharactersListQuery>;
export type CharactersListLazyQueryHookResult = ReturnType<typeof useCharactersListLazyQuery>;
export type CharactersListQueryResult = Apollo.QueryResult<CharactersListQuery, CharactersListQueryVariables>;