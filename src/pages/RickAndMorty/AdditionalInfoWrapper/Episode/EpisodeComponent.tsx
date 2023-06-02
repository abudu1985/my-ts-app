import React from "react";
import { EpisodeQuery } from "../../../../generated/graphql";
import { AdditionalInfoComponentStyled } from "../styles";

interface Props {
  data: EpisodeQuery;
}

const EpisodeComponent: React.FC<Props> = ({ data }) => {
  return (
    <AdditionalInfoComponentStyled>
      <div className="additional-info">
        <div className="info-row">
          <span>Episode name: </span>
          {data?.episode?.name}
        </div>
        <div className="info-row">
          <span>Episode: </span>
          {data?.episode?.episode}
        </div>
        <div className="info-row">
          <span>Date: </span>
          {data?.episode?.air_date}
        </div>
      </div>

      <div className="list-info">
        <div className="header">
          {`${data?.episode?.characters.length} `}Characters
        </div>
        {data?.episode?.characters.length &&
          data?.episode?.characters.map((item) => (
            <span key={item?.id} className="badge">
              {item?.name}
            </span>
          ))}
      </div>
    </AdditionalInfoComponentStyled>
  );
};

export default EpisodeComponent;
