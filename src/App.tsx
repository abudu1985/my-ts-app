import React from "react";
import RickAndMorty from "../src/pages/RickAndMorty";

import Todo from "@/pages/Todo";

const App: React.FC = () => {
  return (
    <div className="App">
      <RickAndMorty />
      {/* <Todo /> */}
    </div>
  );
};

export default App;
