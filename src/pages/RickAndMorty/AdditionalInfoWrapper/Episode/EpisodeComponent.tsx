import React from "react";
import { EpisodeQuery } from "@/generated/graphql";

interface Props {
  data: EpisodeQuery;
}

const EpisodeComponent: React.FC<Props> = ({ data }) => {
  return <div>EpisodeComponent</div>;
};

export default EpisodeComponent;
