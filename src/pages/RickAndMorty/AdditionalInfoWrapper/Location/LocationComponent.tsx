import React from "react";
import { LocationQuery } from "@/generated/graphql";
import { AdditionalInfoComponentStyled } from "../styles";

interface Props {
  data: LocationQuery;
}

const LocationComponent: React.FC<Props> = ({ data }) => {
  return (
    <AdditionalInfoComponentStyled>
      <div className="additional-info">
        <div className="info-row">
          <span>Location name: </span>
          {data?.location?.name}
        </div>
        <div className="info-row">
          <span>Dimension: </span>
          {data?.location?.dimension}
        </div>
        <div className="info-row">
          <span>Location type: </span>
          {data?.location?.type}
        </div>
      </div>

      <div className="list-info">
        <div className="header">
          {`${data?.location?.residents.length} `}Residents
        </div>
        {data?.location?.residents.length &&
          data.location.residents.map((item) => (
            <span key={item?.id} className="badge">{item?.name}</span>
          ))}
      </div>
    </AdditionalInfoComponentStyled>
  );
};

export default LocationComponent;
