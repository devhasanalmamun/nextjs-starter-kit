"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// 1. Create Context
const counterContext = createContext<CounterContextType>({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

// 2. Parent component type with static properties
interface CounterCompoundComponent {
  Count: typeof Count;
  Label: typeof Label;
  Increase: typeof Increase;
  Decrease: typeof Decrease;
}

// 3. Create the parent component
const CounterRoot: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <counterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </counterContext.Provider>
  );
};

// 4. Create child components to help implementing common task
const Count: FC = () => {
  const { count } = useContext(counterContext);
  return <span>{count}</span>;
};

const Label: FC<{ children: ReactNode }> = ({ children }) => {
  return <span>{children}</span>;
};

const Increase: FC<{ icon: ReactNode }> = ({ icon }) => {
  const { increase } = useContext(counterContext);
  return <button onClick={increase}>{icon}</button>;
};

const Decrease: FC<{ icon: ReactNode }> = ({ icon }) => {
  const { decrease } = useContext(counterContext);
  return <button onClick={decrease}>{icon}</button>;
};

// 5. Add child child components as properties to parent componet
const Counter = CounterRoot as typeof CounterRoot & CounterCompoundComponent;

Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
