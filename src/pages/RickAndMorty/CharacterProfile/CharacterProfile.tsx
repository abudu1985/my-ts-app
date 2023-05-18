import * as React from "react";
import { CharacterProfileQuery } from "@/generated/graphql";
import { CharacterProfileStyled } from "./styles";
import { AdditionalInfoContext } from "../context/AdditionalInfoContext";
import * as constants from "../constants";

interface Props {
  data: CharacterProfileQuery;
}

const CharacterProfile: React.FC<Props> = ({ data }) => {
  const {
    dispatch,
    type,
    id: itemId,
  } = React.useContext(AdditionalInfoContext);

  React.useEffect(() => {
    if (data?.character?.location) {
      dispatch({
        type: constants.SET_ADDITIONAL_INFO_LOCATION,
        payload: data?.character?.location?.id!,
      });
    }
  }, [data]);

  const clickOnEpisodeHandler = (id: string) => {
    dispatch({
      type: constants.SET_ADDITIONAL_INFO_EPISODE,
      payload: id,
    });
  };

  const clickOnLocationHandler = (id: string) => {
    dispatch({
      type: constants.SET_ADDITIONAL_INFO_LOCATION,
      payload: id,
    });
  };

  const getLocationClass = () => {
    return `with-pointer ${
      type === constants.SET_ADDITIONAL_INFO_LOCATION ? "active" : ""
    }`;
  };

  const getEpisodeClass = (id: string) => {
    return `badge ${
      type === constants.SET_ADDITIONAL_INFO_EPISODE && id === itemId
        ? "active"
        : ""
    }`;
  };

  if (!data.character) {
    return <div>No character available</div>;
  }

  return (
    <CharacterProfileStyled>
      <div className="main-info">
        <div className="outter-badge">
          <img
            src={data.character.image!}
            className="image"
            key={data.character.name}
            alt={data.character.name!}
          />
          <div className="inner-badge">
            <p>{data.character.status}</p>
          </div>
        </div>

        <div className="">
          <span>{data.character.name}</span>
        </div>
      </div>

      <div className="additional-info">
        <div className="info-row">
          <span>Species: </span>
          {data.character.species}
        </div>
        <div className="info-row">
          <span>Gender: </span>
          {data.character.gender}
        </div>
        <div className="info-row">
          <span>Location: </span>
          <span
            className={getLocationClass()}
            onClick={() =>
              data?.character?.location?.id &&
              clickOnLocationHandler(data?.character?.location?.id)
            }
          >
            {data.character.location?.name}
          </span>
        </div>
        <div className="info-row">
          <span>Origin: </span>
          {data.character.origin?.name}
        </div>
        <div className="info-row">
          <span>Type: </span>
          {data.character.type || "unknown"}
        </div>
      </div>

      <div className="episodes-info">
        <div className="header">
          {`${data?.character?.episode.length} `}Episodes
        </div>
        {data?.character?.episode.length &&
          data.character.episode.map((item) => (
            <span
              key={item?.id}
              className={getEpisodeClass(item?.id!)}
              onClick={() => item?.id && clickOnEpisodeHandler(item?.id)}
            >
              {item?.episode}
            </span>
          ))}
      </div>
    </CharacterProfileStyled>
  );
};

export default CharacterProfile;
