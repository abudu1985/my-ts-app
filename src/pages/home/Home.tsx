import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;

  .column1 {
    background-color: rgba(255, 255, 255, 0.8);
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-center-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 35px;
    padding: 15px 10px 10px;
    width: 95%;

    .badge {
      background-color: cadetblue;
      color: white;
      padding: 4px 8px;
      text-align: center;
      border-radius: 5px;
      margin: 4px;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const projectsLinks = [
  {
    path: "/rickAndMorty",
    name: "RickAndMorty",
  },
  {
    path: "/todo",
    name: "Todo",
  },
  {
    path: "/expoPlatformInterview",
    name: "ExpoPlatformInterview",
  },
  {
    path: "/typingChildren",
    name: "TypingChildren",
  },
  {
    path: "/avangersQuiz",
    name: "AvangersQuiz",
  },
  {
    path: "/characterCard",
    name: "CharacterCard",
  },
  {
    path: "/counter",
    name: "Counter",
  },
  {
    path: "/counterWithHooks",
    name: "CounterWithHooks",
  },
  {
    path: "/dogFacts",
    name: "DogFacts",
  },
  {
    path: "pizzaCalculator",
    name: "PizzaCalculator",
  },
  {
    path: "colorSwatch",
    name: "ColorSwatch",
  },
  {
    path: "currentUser",
    name: "CurrentUser",
  },
  {
    path: "nameTagHoc",
    name: "NameTagHoc",
  },
  {
    path: "burritos",
    name: "Burritos",
  },
  {
    path: "formWithValidation",
    name: "FormWithValidation",
  },
];

const Home = () => {
  return (
    <HomeStyled>
      <div className=""></div>
      <div className="column1">
        <div className="home-center-content">
          {projectsLinks.map((item) => (
            <Link key={item?.path} to={item.path} className="badge">
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div className=""></div>
    </HomeStyled>
  );
};

export default Home;
