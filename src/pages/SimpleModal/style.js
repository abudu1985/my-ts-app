import styled from "styled-components";

const SimpleModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .openModalBtn {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 6px;
    background-color: cornflowerblue;
    color: white;
    cursor: pointer;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

export default SimpleModalStyled;
