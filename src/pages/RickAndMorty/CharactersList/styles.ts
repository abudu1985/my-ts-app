import styled from "styled-components";

export const CharactersListStyled = styled.div`
  height: 100vh;
  overflow: hidden auto;
  width: 300px;
  padding-left: 20px;
  padding-right: 20px;

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .item {
    padding: 10px;
    border-radius: 10px;
    border: solid cadetblue;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .active {
    border: solid coral;
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
`;
