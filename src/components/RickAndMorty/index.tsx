import React from "react";
import styled from "styled-components";

import CharactersList from "./CharactersList";
import CharacterProfile from "./CharacterProfile";

const RickAndMortyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
  background-color: #ffff99;
  width: 100%;
`;

const RickAndMorty: React.FC = () => {
  const [id, setId] = React.useState("1");
  const handleIdChange = React.useCallback((newId: string) => {
    setId(newId);
  }, []);

  return (
    <RickAndMortyContainer>
      <CharactersList handleIdChange={handleIdChange} />
      <CharacterProfile id={id} />
      <div>hello</div>
    </RickAndMortyContainer>
  );
};

export default RickAndMorty;
