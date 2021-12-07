import useCounter from "./../hooks/useCounter";

const CounterHook = () => {
  const { elementToAnimate, counter, handleCounter } = useCounter({
    maxCount: 15,
  });

  return (
    <div>
      <h1>CounterEffect</h1>
      <h2 ref={elementToAnimate}> {counter}</h2>
      <button onClick={() => handleCounter()}>+1</button>
    </div>
  );
};

export default CounterHook;
