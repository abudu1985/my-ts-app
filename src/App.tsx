import React from "react";
import CharactersList from "./components/RickAndMorty/CharactersList";
import CharacterProfile from "./components/RickAndMorty/CharacterProfile";
import RickAndMorty from "./components/RickAndMorty";

import Todo from "./components/Todo";

const App: React.FC = () => {
  return (
    <div className="App">
      <RickAndMorty />
      {/* <CharactersList handleIdChange={handleIdChange} />
      <CharacterProfile id={id} /> */}
      {/* <Todo /> */}
    </div>
  );
};

export default App;
