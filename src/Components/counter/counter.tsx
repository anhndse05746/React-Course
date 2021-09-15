import React from "react";

export interface Props {
  counter: counter;
  onDelete: (counter: counter) => void;
  onIncrement: (counter: counter) => void;
  onDecrement: (counter: counter) => void;
}

export interface counter {
  id: number;
  value: number;
}

const Counter: React.FC<Props> = ({
  counter,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
  const formatValue = () => {
    return counter.value === 0 ? "zero" : counter.value;
  };

  const getBadgeClass = () => {
    let cl = "badge m-2 ";
    return counter.value === 0 ? cl + "bg-warning" : cl + "bg-primary";
  };

  const getDecrementClass = () => {
    let className = "btn btn-secondary btn-sm m-1";
    if (counter.value === 0) return `${className} disabled`;

    return className;
  };

  return (
    <React.Fragment>
      <div>
        <div className="row">
          <div className="col-2">
            <span className={getBadgeClass()}>{formatValue()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className={getDecrementClass()}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter)}
              className="btn btn-sm btn-danger"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
