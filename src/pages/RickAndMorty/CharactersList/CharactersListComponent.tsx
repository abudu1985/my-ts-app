import * as React from "react";

import { CharactersListQuery } from "@/generated/graphql";
import useScroll from "@/hooks/useScroll";
import Spinner from "@/components/Spinner";
import { CharactersListStyled } from "./styles";

export interface OwnProps {
  handleIdChange: (newId: string) => void;
  isLoading?: boolean;
  activeId: string;
  loadMore?: () => void;
}

interface Props extends OwnProps {
  data: CharactersListQuery;
}

const CharactersListComponent: React.FC<Props> = ({
  data,
  isLoading,
  handleIdChange,
  loadMore,
  activeId,
}) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const intersected = useScroll(parentRef, childRef, loadMore);

  return (
    <CharactersListStyled ref={parentRef}>
      <h3>Characters {data?.characters?.results?.length || 0}</h3>
      <ol className="list">
        {!!data?.characters?.results &&
          data.characters.results.map(
            (character, i) =>
              !!character && (
                <li
                  key={character.name}
                  className={`item ${
                    character.id === activeId ? "active" : ""
                  }`}
                  onClick={() => handleIdChange(character.id!)}
                >
                  {character.name} ({character.species})
                </li>
              )
          )}
      </ol>
      <div ref={childRef}>
        <Spinner />
      </div>
    </CharactersListStyled>
  );
};

export default CharactersListComponent;
