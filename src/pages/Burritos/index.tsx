import * as React from "react";
import { Menu } from "./components/Menu";
import { Order } from "./components/Order";
import { BurritoType } from "./types";

import burritos from "./data.json";
import BurritosStyled from "./style";

const Burritos = () => {
  const [orderItems, setOrderItems] = React.useState<BurritoType[]>([]);

  return (
    <BurritosStyled>
      <main>
        <header>
          <h1 data-test-id="main-heading">Tasty Burritos</h1>
        </header>

        <div className="container">
          <Menu
            burritos={burritos}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />
          <Order orderItems={orderItems} />
        </div>
      </main>
    </BurritosStyled>
  );
};

export default Burritos;
