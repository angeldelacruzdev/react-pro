import { useState } from "react";

interface CounterByProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

const CounterBy = ({ initialValue = 0 }: CounterByProps) => {
  const [counter, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleCounter = (value: number) => {
    setCounter(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + value,
    }));
  };

  return (
    <div>
      <h1>Counter {counter.counter}</h1>

      <button onClick={() => handleCounter(1)}>+1</button>

      <button>+5</button>
    </div>
  );
};

export default CounterBy;
