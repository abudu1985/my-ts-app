import { useState } from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./styles.css";

import Users from "./Users";
import Cars from "./Cars";


const ExpoPlatformInterviewStyled = styled.div`
    font-family: sans-serif;
    text-align: center;
  
  button {
    padding: 10px;
    border-radius: 4px;
    border: none;
    margin: 1em;
    background-color: rgba(0, 0, 255, 0.5);
    text-transform: uppercase;
    color: white;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    min-height: 250px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    padding: 1em;
    margin: 5px;
    position: relative;
  }
  
  .name,
  .job {
    margin: 5px;
  }
  
  h4.job {
    bottom: 0;
    position: absolute;
  }
  
  header {
    text-align: right;
  }
  
  .nameLength {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  
  .basket--wrapper {
    position: relative;
    display: inline-block;
    margin: 20px 20px 0 0;
  }
  
  .basket {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 255, 0.5);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 10px;
    color: yellow;
    position: absolute;
    top: -15px;
    right: -15px;
  }
  
  footer {
    margin-top: 10px;
    padding: 10px 0;
    text-align: right;
    border-top: 1px solid lightgray;
  }
  
`

export default function ExpoPlatformInterview(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const addNumber = (): void => {
    /**
     * This is a simulation of working with the backend
     * our backend can get a response from 0 - 2s
     * the response will contain only success status
     */
    setTimeout(() => setCount(prev => prev + 1), Math.random() * 2000);
  }

  return (
    <ExpoPlatformInterviewStyled>
      <header>
        <div className="basket--wrapper">
          <ShoppingCartIcon />
          <span className="basket">{count}</span>
        </div>
      </header>
      <hr />
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <hr />
      <button onClick={addNumber}>Add value</button>
      <button onClick={() => setCount(count - 1)}>Remove value</button>
      <hr />
      <Users />
      <Cars />
      <footer>Items in the basket: {count}</footer>
    </ExpoPlatformInterviewStyled>
  );
}

