import * as React from "react";
import { CharacterInformation } from "./CharacterInformation";
import { CharacterType, fetchCharacter } from "./characters";
import { Loading } from "./Loading";
import StyledCharacter from "./style";

const CharacterCard = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchCharacter().then((c) => {
      setCharacter(c);
      setLoading(false);
    });
  }, []);

  return (
    <StyledCharacter>
      <main>
        {loading && <Loading />}
        {character && <CharacterInformation character={character} />}
      </main>
    </StyledCharacter>
  );
};

export default CharacterCard;
