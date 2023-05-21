import { FC } from "react";

/**
 * How I can add a type from the types?
 */

/**
 * This data coming from backend
 * carsList.color -> colorAndType.type -> types
 */

type CarType<ColorType, T = undefined> = {
  id: number;
  number: string;
  description: string;
  color: ColorType;
} & (T extends undefined
  ? {}
  : {
      type: T;
    });

const types = {
  1: "micro",
  2: "sedan",
  3: "wagon",
};

const colorAndType = [
  {
    id: 1,
    color: "yellow",
    type: 2,
  },
  {
    id: 2,
    color: "blue",
    type: 1,
  },
  {
    id: 3,
    color: "green",
    type: 3,
  },
];

const carsList: CarType<number>[] = [
  {
    id: 1,
    number: "AH0001AA",
    color: 1,
    description: "My first car",
  },
  {
    id: 2,
    number: "AH0002AA",
    color: 2,
    description: "My second car",
  },
  {
    id: 3,
    number: "AH0003AA",
    color: 3,
    description: "My third car",
  },
];

/**
 * How I can add a type from the types?
 * carsList.color -> colorAndType.type -> types
 */

const Cars: FC = () => {
  const readyList = carsList.reduce((acc, car) => {
    // find a color
    const findedColor = colorAndType.find((c) => c.id === car.color);
    // find a type
    const findedType = types[findedColor!.type as keyof typeof types];

    return [
      ...acc,
      { ...car, color: findedColor?.color, type: findedType },
    ] as CarType<string, string>[];
  }, [] as CarType<string, string>[]);

  return (
    <>
      <h2>Cars list</h2>
      {readyList.map((car) => (
        <div key={car.number}>{JSON.stringify(car)}</div>
      ))}
    </>
  );
};

export default Cars;
