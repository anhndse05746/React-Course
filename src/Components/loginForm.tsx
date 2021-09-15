import React, { FormEvent, useState } from "react";
import Input from "./common/input";

interface LoginFormProps {}

interface Account {
  username: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  let [account, setAccount] = useState<Account>({ username: "", password: "" });
  let [errors, setErrors] = useState<Account | {}>({});

  const validate = (account: Account) => {
    const { username, password } = account;
    let errors = { username: "", password: "" };

    if (username.trim() === "") {
      errors.username = `username cannot be empty`;
    }
    if (password.trim() === "") {
      errors.password = `password cannot be empty`;
    }

    return errors.username === "" && errors.password === "" ? null : errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errorResult = validate(account);
    setErrors(errorResult || {});

    if (errorResult) return;

    //submit the form
    console.log("submitted");
  };

  const validateProperty = (name: "username" | "password", value: string) => {
    let error = { ...errors };

    if (value.trim() === "") error[name] = `${name} cannot be empty`;
    else error[name] = "";
    setErrors(error);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    let updateAcc: Account = { ...account };
    updateAcc[name as "username" | "password"] = value;
    setAccount(updateAcc);

    validateProperty(name as "username" | "password", value);
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          error={errors}
          value={account.username}
          onChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          error={errors}
          value={account.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary my-2">Save</button>
      </form>
    </div>
  );
};
export default LoginForm;
