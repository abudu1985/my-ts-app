import styled from "styled-components";

export const AdditionalInfoComponentStyled = styled.div`
  padding: 10px 20px;

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

  .list-info {
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    justify-content: left;
    margin-top: 35px;
    border: solid cadetblue;
    padding: 15px 10px 10px;
    width: 95%;
    max-height: 750px;
    overflow: auto;

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

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: cadetblue;
      border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #2fb6b6;
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
