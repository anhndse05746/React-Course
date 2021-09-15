import React from "react";
import Counter, { counter } from "./counter";

export interface Props {
  counters: counter[];
  onIncrement: (counter: counter) => void;
  onDelete: (counter: counter) => void;
  onReset: () => void;
  onDecrement: (counter: counter) => void;
}

const Counters: React.FC<Props> = ({
  counters,
  onDelete,
  onIncrement,
  onReset,
  onDecrement,
}) => {
  return (
    <div className="col">
      <button onClick={() => onReset()} className="btn btn-sm btn-primary m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={() => onDelete(counter)}
          onIncrement={() => onIncrement(counter)}
          onDecrement={() => onDecrement(counter)}
        />
      ))}
    </div>
  );
};

export default Counters;
