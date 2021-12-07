import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface HookProps {
  maxCount: number;
}

const useCounter = ({ maxCount = 1 }: HookProps) => {
  const [counter, setCounter] = useState(8);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 10,
        duration: 0.5,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return { elementToAnimate, counter, handleCounter };
};

export default useCounter;
