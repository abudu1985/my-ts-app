import styled from "styled-components";

const ColorSwatchStyled = styled.div`
  html,
  body,
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }
  body {
    background-color: #999;
  }
  h1 {
    text-align: center;
  }
  button,
  input[type="submit"] {
    background-color: rgba(4, 5, 87, 0.575);
    border: 5px solid rgba(11, 13, 233, 0.575);
    color: white;
    margin: 0 0.5em;
    padding: 1em;
    outline: none;
  }
  button:hover,
  input[type="submit"]:hover {
    background-color: rgba(3, 4, 63, 0.575);
  }
  button:active,
  input[type="submit"]:active {
    background-color: rgba(2, 2, 38, 0.575);
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
    background-color: white;
    box-shadow: 1px 1px 3px #666;
    border: 5px solid rgba(49, 52, 246, 0.575);
    font-weight: 700;
    margin: 2em auto;
    padding: 1em;
    width: 600px;
  }
  .color-swatch {
    width: 400px;
    height: 400px;
    margin: auto;
  }
  .color-inputs,
  .color-sliders {
    display: flex;
    margin: 1em 0;
  }
  .color-input,
  .color-slider {
    width: 100%;
    padding: 1em;
  }
  .color-input label,
  .color-slider label {
    display: block;
    text-align: center;
    margin-bottom: 0.5em;
  }
  .color-input input,
  .color-slider input {
    width: 100%;
    display: block;
    margin: 0em;
  }

  .color-name-types {
    display: flex;
    justify-content: space-between;
  }
`;

export default ColorSwatchStyled;
