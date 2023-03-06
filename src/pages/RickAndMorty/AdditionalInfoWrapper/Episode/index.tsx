import * as React from "react";
import { useEpisodeQuery } from "@/generated/graphql";
import EpisodeComponent from "./EpisodeComponent";

interface OwnProps {
  id: string;
}

const Episode: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useEpisodeQuery({
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
    return <div>Select a location</div>;
  }

  return <EpisodeComponent data={data} />;
};

export default Episode;
