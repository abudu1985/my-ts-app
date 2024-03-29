import styled from "styled-components";

const StyledCharacter = styled.div`
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
    margin: 2em auto;
    width: 300px;
    box-shadow: 5px 5px 5px #111;
    background-color: white;
  }
  header {
    font-size: 2em;
    padding: 0.25em 0;
    text-align: center;
    background-color: #fcf;
  }
  table {
    width: 100%;
    padding: 3em;
  }
  tr {
    width: 100%;
  }
  th {
    text-align: left;
  }
  td {
    text-align: right;
  }
  .loading {
    text-align: center;
    padding: 2em 0;
  }
`;

export default StyledCharacter;
