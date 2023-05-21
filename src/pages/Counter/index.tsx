import { useEffect, useState } from "react";
import StyledCounter from "./style";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return (
    <StyledCounter>
      <main className="count">{count}</main>
    </StyledCounter>
  );
};

export default Counter;
