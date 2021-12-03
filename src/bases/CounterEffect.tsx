import { useEffect, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(8);

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.warn("Llego al valor máximo");

    gsap.to("h2", { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
      gsap.to("h2", { y: 10, duration: 0.5, ease: "ease.out" });
    });
  }, [counter]);

  return (
    <div>
      <h1>CounterEffect</h1>
      <h2> {counter}</h2>
      <button onClick={() => handleCounter()}>+1</button>
    </div>
  );
};

export default CounterEffect;
