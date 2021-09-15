import React, { FormEvent } from "react";

interface InputProps {
  name: string;
  label: string;
  value: string;
  error: any;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
        type={name}
      />
      {error[name] && <div className="alert alert-danger">{error[name]}</div>}
    </div>
  );
};
export default Input;
