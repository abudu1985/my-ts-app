import styled from "styled-components";

const PizzaCalculatorStyled = styled.div`
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
    background-color: #00a0a0;
    border: 5px solid #3affff;
    color: white;
    margin: 0 0.5em;
    padding: 1em;
    outline: none;
  }
  button:hover,
  input[type="submit"]:hover {
    background-color: #008787;
  }
  button:active,
  input[type="submit"]:active {
    background-color: #006d6d;
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
    margin: 1em 0 0.5em 0;
    display: flex;
    flex-direction: column;
  }
  form label {
    text-align: center;
    display: block;
    margin: 1.5em 0 0.5em 0;
  }
  .calculator {
    border: 5px solid #6dffff;
    font-weight: 700;
    margin: 2em auto;
    padding: 1em;
    width: 600px;
  }
  .calculation {
    padding: 1em;
    margin: 1em;
    background-color: #d3ffff;
  }
  .count {
    font-size: 8em;
    text-align: center;
  }
  .caption {
    font-size: 1.5em;
    text-align: center;
  }
  .controls {
    display: flex;
    justify-content: center;
  }
`;

export default PizzaCalculatorStyled;
