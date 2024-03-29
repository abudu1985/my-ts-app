import styled from "styled-components";

const StyledDogFacts = styled.div`
  html,
  body,
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }
  button,
  input[type="submit"] {
    background-color: #0f8b23;
    border: 5px solid #48eb62;
    color: white;
    margin: 0 0.5em;
    padding: 1em;
    outline: none;
  }
  button:hover,
  input[type="submit"]:hover {
    background-color: #0d741d;
  }
  button:active,
  input[type="submit"]:active {
    background-color: #0a5d17;
  }
  input,
  label {
    padding: 1em;
  }
  input:not([type="submit"]),
  label:not([type="submit"]) {
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
    border: 5px solid #76f08a;
    margin: 2em auto;
    padding: 1em;
    width: 600px;
    box-shadow: 1px 1px 3px #76f08a;
  }
  .fact-input {
    display: flex;
  }
  .fact-input label,
  .fact-input input {
    display: block;
    width: 320px;
    font-weight: 700;
  }
  .fact-input input {
    width: 100%;
  }
  .dog-fact {
    border: 1px solid #48eb62;
    padding: 1em;
    margin: 1em 0;
    box-shadow: 1px 1px 3px #76f08a;
  }
  .dog-fact h3 {
    margin-top: 0;
    color: #0f8b23;
    padding-bottom: 5px;
    border-bottom: 1px dashed #76f08a;
  }
  .dog-fact p {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;

export default StyledDogFacts;
