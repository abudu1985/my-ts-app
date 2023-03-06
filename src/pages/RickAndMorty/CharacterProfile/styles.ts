import styled from "styled-components";

export const CharacterProfileStyled = styled.div`
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
