import * as React from "react";
import { useCharacterProfileQuery } from "../../../generated/graphql";
import CharacterProfile from "./CharacterProfile";
import Spinner from "../../../components/Spinner"

interface OwnProps {
  id: string;
}

const CharacterProfileContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useCharacterProfileQuery({
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);

  if (error || loading) {
    return <Spinner/>;
  }

  if (!data) {
    return <div>Select a characted from the panel</div>;
  }

  return <CharacterProfile data={data} />;
};

export default CharacterProfileContainer;
