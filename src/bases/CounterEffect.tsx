import { useEffect, useState } from "react";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(8);

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.warn("Llego al valor máximo");
  }, [counter]);

  return (
    <div>
      <h1>CounterEffect {counter}</h1>
      <button onClick={() => handleCounter()}>+1</button>
    </div>
  );
};

export default CounterEffect;
