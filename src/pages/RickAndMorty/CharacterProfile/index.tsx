import * as React from "react";
import { useCharacterProfileQuery } from "@/generated/graphql";
import CharacterProfile from "./CharacterProfile";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a characted from the panel</div>;
  }

  return <CharacterProfile data={data} />;
};

export default CharacterProfileContainer;
