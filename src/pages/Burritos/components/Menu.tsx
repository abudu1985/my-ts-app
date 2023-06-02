import React from "react";
import { Item } from "./Item";
import { BurritoType } from "../types";

type MenuProps = {
  burritos: BurritoType[];
  orderItems: BurritoType[];
  setOrderItems: ([]: BurritoType[]) => void;
};

export const Menu = ({ burritos, orderItems, setOrderItems }: MenuProps) => (
  <section className="menu">
    <h2 className="menu__heading">Menu</h2>

    <div className="menu__items" data-test-id="menu-items">
      {burritos.map((item) => (
        <Item
          key={`${item.id}`}
          item={item}
          orderItems={orderItems}
          setOrderItems={setOrderItems}
        />
      ))}
    </div>
  </section>
);
