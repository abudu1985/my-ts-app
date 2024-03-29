import styled from "styled-components";

const NameTagStyled = styled.div`
  html,
  body,
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }
  main {
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-shadow: 3px 3px 10px #ccc;
    max-width: 500px;
    margin: 2em auto;
  }
  header {
    padding: 10px 0 1px 0;
    background-color: red;
    border-radius: 25px 25px 0 0;
    color: white;
  }
  header h1 {
    margin: 0;
    text-transform: uppercase;
  }
  header p {
    padding-top: 0;
    margin-top: 0;
    text-transform: lowercase;
  }
  footer {
    background-color: red;
    border-radius: 0 0 25px 25px;
    padding: 10px;
  }
  .display-name {
    font-size: 2em;
    padding: 40px 0;
  }
  .display-name p {
    font-family: cursive;
  }
`;

export default NameTagStyled;
