import { useState } from "react";

const Counter = (props: { initialValue: number }) => {
  const [counter, setCounter] = useState(props.initialValue);

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
