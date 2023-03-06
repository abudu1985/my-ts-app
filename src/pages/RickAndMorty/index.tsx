import React from "react";
import styled from "styled-components";

import CharactersList from "./CharactersList";
import CharacterProfile from "./CharacterProfile";

import { AdditionalInfoContextProvider } from "./context/AdditionalInfoContext";
import AdditionalInfoWrapper from "./AdditionalInfoWrapper";

const RickAndMortyStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
  background-color: #ffff99;
  width: 100%;
`;

const RickAndMorty: React.FC = () => {
  const [characterId, setCaharacterId] = React.useState("1");

  const handleCharacterIdChange = React.useCallback((newId: string) => {
    setCaharacterId(newId);
  }, []);

  return (
    <AdditionalInfoContextProvider>
      <RickAndMortyStyled>
        <CharactersList
          handleIdChange={handleCharacterIdChange}
          activeId={characterId}
        />
        <CharacterProfile id={characterId} />
        <AdditionalInfoWrapper />
      </RickAndMortyStyled>
    </AdditionalInfoContextProvider>
  );
};

export default RickAndMorty;
