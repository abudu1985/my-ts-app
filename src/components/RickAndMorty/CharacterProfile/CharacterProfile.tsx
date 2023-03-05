import * as React from "react";
import styled from "styled-components";

import { CharacterProfileQuery } from "../../../generated/graphql";

interface Props {
  data: CharacterProfileQuery;
}

const CharacterProfileStyled = styled.div`
  padding: 10px 20px;

  .main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 450px;
    justify-content: space-evenly;
    font-size: 24px;
    font-weight: 600;

    .outter-badge {
      position: relative;

      .image {
        max-width: 350px;
      }
    }

    .inner-badge {
      display: table;
      position: absolute;
      top: -15px;
      right: -25px;
      background-color: coral;
      background-repeat: no-repeat;
      background-size: cover;
      text-align: center;
    }
    .inner-badge p {
      display: table-cell;
      vertical-align: middle;
      padding: 6px;
    }
  }

  .additional-info {
    margin: 10px;

    .info-row {
      font-size: 18px;
      margin: 8px;

      span {
        font-size: 16px;
      }
    }
  }

  .episodes-info {
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    justify-content: left;
    margin-top: 35px;

    border: solid cadetblue;
    padding: 15px 10px 10px;
    width: 95%;

    .header {
      position: absolute;
      margin-top: -25px;
      margin-left: 10px;
      color: white;
      background: cadetblue;
      border-radius: 10px;
      padding: 2px 10px;
    }

    .badge {
      background-color: cadetblue;
      color: white;
      padding: 4px 8px;
      text-align: center;
      border-radius: 5px;
      margin: 4px;
    }

    h1 {
      width: 30px;
      margin-top: -10px;
      margin-left: 5px;
      background: white;
    }
  }

  .componentWrapper {
    border: solid cadetblue;
    border-radius: 40px;
    padding: 15px 10px 10px;
    width: 95%;
  }

  .componentWrapper .header {
    position: absolute;
    margin-top: -25px;
    margin-left: 10px;
    color: white;
    background: cadetblue;
    border-radius: 10px;
    padding: 2px 10px;
  }
`;

const CharacterProfile: React.FC<Props> = ({ data }) => {
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
          {data.character.location?.name}
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
            <span className="badge">{item?.episode}</span>
          ))}
      </div>
    </CharacterProfileStyled>
  );
};

export default CharacterProfile;
