import * as React from "react";
import CharactersListComponent, { OwnProps } from "./CharactersListComponent";

import { useCharactersListQuery } from "@/generated/graphql";

const CharactersList: React.FC<OwnProps> = (props) => {
  const [pageNumber, setPageNumber] = React.useState(1);

  const { data, error, loading, refetch } = useCharactersListQuery({
    variables: { page: pageNumber },
  });

  const [characters, setCharacters] = React.useState(data);

  React.useEffect(() => {
    refetch({ page: pageNumber }).then(({ data }) => {
      setCharacters(data);
    });
  }, []);

  const loadMore = React.useCallback(() => {
    const newPageNumber = pageNumber + 1;

    refetch({ page: newPageNumber }).then(({ data }) => {
      const newCharacters = {
        characters: {
          results: characters?.characters?.results
            ? [...characters?.characters.results, ...data?.characters?.results!]
            : data?.characters?.results,
        },
      };

      setCharacters(newCharacters);
      setPageNumber(newPageNumber);
    });
  }, [setPageNumber, pageNumber, characters]);

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <CharactersListComponent
      {...props}
      data={characters!}
      loadMore={loadMore}
      isLoading={!!loading}
    />
  );
};

export default CharactersList;
