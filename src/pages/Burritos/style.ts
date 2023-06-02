import styled from "styled-components";

const BurritosStyled = styled.div`
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-family: "Roboto", sans-serif;
    color: #202020;
    background-color: #fbfbfb;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  /* MIXINS ============================================ */
  /* HEADER ============================================ */
  header {
    margin: auto;
    text-align: center;
    background: url(/images/bg.jpg) repeat-x;
    height: 60px;
    background-size: contain;
  }
  header h1 {
    margin: 0;
    text-shadow: 5px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
    color: white;
    line-height: 55px;
    font-size: 35px;
    text-transform: uppercase;
  }
  /* CONTAINER ============================================ */
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    max-width: 1200px;
    margin: auto;
  }
  /* MENU ============================================ */
  .menu__heading {
    text-align: center;
    font-family: "Titan One", cursive;
    color: #fbe101;
    text-shadow: 1px 1px #7d6000;
    font-size: 30px;
  }
  /* ITEM ============================================ */
  .item {
    display: grid;
    padding: 20px;
    align-items: center;
    grid-gap: 1rem;
    grid-template-columns: 1fr 200px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    background-color: white;
    border-radius: 0.25rem;
  }
  .item__info {
    align-items: center;
  }
  .item--title {
    text-align: center;
    font-family: "Titan One", cursive;
    color: #fbe101;
    text-shadow: 1px 1px #7d6000;
    font-size: 30px;
  }
  .item__heading,
  .item__spice {
    display: inline-block;
  }
  .item__spice {
    margin-left: 5px;
  }
  .item__description {
    line-height: normal;
  }
  .item__media img {
    max-width: 200px;
  }
  .item button {
    cursor: pointer;
    background-color: #26d433;
    border: 0;
    width: 100%;
    color: white;
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    padding: 10px;
  }
  /* ORDER ============================================ */
  .order__item {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 20px;
    display: grid;
    padding: 20px;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background-color: white;
    position: relative;
  }
  .order__heading {
    text-align: center;
    font-family: "Titan One", cursive;
    color: #fbe101;
    text-shadow: 1px 1px #7d6000;
    font-size: 30px;
  }
  .order__heading--total {
    font-size: 25px;
    color: #3ffbd1;
  }
  .order__heading--total span {
    font-weight: 100;
  }
  .order__heading--nothing {
    text-align: center;
  }
  .order__name h3,
  .order__price h3 {
    margin: 0;
  }
  .order__spice {
    margin-right: 20px;
  }
  .order__price {
    text-align: right;
  }

  .inner-badge {
    position: absolute;
    top: -10px;
    right: -5px;
    font-size: 1em;
    background: green;
    color: white;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    box-shadow: rgb(51, 51, 51) 0px 0px 1px;
  }
`;

export default BurritosStyled;
