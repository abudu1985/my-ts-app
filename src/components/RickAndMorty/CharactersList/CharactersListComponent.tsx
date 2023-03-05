import * as React from "react";
import styled from "styled-components";

import { CharactersListQuery } from "../../../generated/graphql";
import useScroll from "../../../hooks/useScroll";

const CharactersListStyled = styled.div`
  height: 100vh;
  overflow: hidden auto;
  width: 300px;
  padding-left: 20px;
  padding-right: 20px;

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .item {
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid #919191;
    cursor: pointer;
  }
`;

export interface OwnProps {
  handleIdChange: (newId: string) => void;
  isLoading?: boolean;
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
}) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const intersected = useScroll(parentRef, childRef, loadMore);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <CharactersListStyled ref={parentRef}>
      <h3>Characters {data?.characters?.results?.length || 0}</h3>
      <ol className="list">
        {!!data?.characters?.results &&
          data.characters.results.map(
            (character, i) =>
              !!character && (
                <li
                  key={character.id}
                  className="item"
                  onClick={() => handleIdChange(character.id!)}
                >
                  {character.name} ({character.species})
                </li>
              )
          )}
      </ol>
      <div ref={childRef} style={{ height: 20, background: "green" }} />
    </CharactersListStyled>
  );
};

export default CharactersListComponent;
