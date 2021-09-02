import React, { useState } from "react";
import Counters from "./Components/counters";
import NavBar from "./Components/navBar";
import { counter } from "./Components/counter";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  let [counters, setCounters] = useState<counter[]>([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ]);

  const handleDelete = (counter: counter) => {
    setCounters(counters.filter((c) => c.id !== counter.id));
  };

  const handleIncrement = (counter: counter) => {
    const index = counters.indexOf(counter);
    let newCounters = [...counters];
    newCounters[index].value += 1;

    setCounters(newCounters);
  };

  const handleDecrement = (counter: counter) => {
    const index = counters.indexOf(counter);
    let newCounters = [...counters];
    newCounters[index].value -= 1;

    setCounters(newCounters);
  };

  const handleReset = () => {
    let newCounters = [...counters];
    newCounters.map((c) => (c.value = 0));

    setCounters(newCounters);
  };

  return (
    <React.Fragment>
      <NavBar totalCounters={counters.filter((c) => c.value !== 0).length} />
      <Counters
        counters={counters}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onReset={handleReset}
        onDecrement={handleDecrement}
      />
    </React.Fragment>
  );
};

export default App;
