import styled from "styled-components";

const CurrentUserStyled = styled.div`
  html,
  body,
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }
  h1 {
    text-align: center;
  }
  button,
  input[type="submit"] {
    background-color: magenta;
    border: 5px solid #f9f;
    color: white;
    margin: 0 0.5em;
    padding: 1em;
    outline: none;
  }
  button:hover,
  input[type="submit"]:hover {
    background-color: #e600e6;
  }
  button:active,
  input[type="submit"]:active {
    background-color: #c0c;
  }
  input {
    padding: 1em;
  }
  input:not([type="submit"]) {
    display: block;
    margin: 0.5em;
  }
  form {
    padding: 0.5em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
  }
  form label {
    text-align: center;
    display: block;
    margin-bottom: 0.5em;
  }
  main {
    border: 5px solid #fcf;
    font-weight: 700;
    margin: 2em auto;
    padding: 1em;
    width: 600px;
  }
  header {
    text-align: center;
    padding: 0.5em;
    background-color: #f9f;
  }
`;

export default CurrentUserStyled;
