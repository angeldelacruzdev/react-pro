import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(8);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.warn("Llego al valor máximo");

    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    }).to(counterElement.current, {
      y: 10,
      duration: 0.5,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <div>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}> {counter}</h2>
      <button onClick={() => handleCounter()}>+1</button>
    </div>
  );
};

export default CounterEffect;
