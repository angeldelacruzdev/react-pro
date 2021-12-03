import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => handleCounter()}>+1</button>
    </div>
  );
};

export default Counter;
