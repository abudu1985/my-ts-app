import * as React from "react";
import styled from "styled-components";

import { CharactersListQuery } from "../../../generated/graphql";
import useScroll from "../../../hooks/useScroll";
import Spinner from "../../Spinner";

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
    padding: 10px;
    border-radius: 10px;
    border: solid cadetblue;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .active {
    border: solid coral;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: cadetblue;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #2fb6b6;
  }
`;

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
