import * as React from "react";
import { useLazyQuery } from "@apollo/client";
import CharactersListComponent, { OwnProps } from "./CharactersListComponent";
import { QUERY_CHARACTERS_LIST } from "./query";

const CharactersList: React.FC<OwnProps> = (props) => {
  const [pageNumber, setPageNumber] = React.useState(1);

  const [getCharacters, { loading, data, error }] = useLazyQuery(
    QUERY_CHARACTERS_LIST
  );

  const [characters, setCharacters] = React.useState(data);

  React.useEffect(() => {
    getCharacters({ variables: { page: pageNumber } });
  }, []);

  React.useEffect(() => {
    if (data?.characters) {
      const newCharacters = {
        characters: {
          results: characters?.characters?.results
            ? [...characters.characters.results, ...data.characters.results]
            : data.characters.results,
        },
      };
      setCharacters(newCharacters);
    }
  }, [data]);

  const loadMore = React.useCallback(() => {
    console.log("qwe QWE");
    const newPageNumber = pageNumber + 1;
    getCharacters({ variables: { page: newPageNumber } });
    setPageNumber(newPageNumber);
  }, [setPageNumber, pageNumber]);

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <CharactersListComponent
      {...props}
      data={characters}
      loadMore={loadMore}
      isLoading={!!loading}
    />
  );
};

export default CharactersList;
