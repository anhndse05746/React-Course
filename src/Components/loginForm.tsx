import Joi from "joi";
import Form from "./common/form";
import Input from "./common/input";

interface LoginFormProps {}

interface LoginFormState {
  data: { username: ""; password: "" };
  errors: {} | { username: ""; password: "" };
}
// define type of state for a specific form

class LoginForm extends Form<LoginFormProps, LoginFormState> {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password").alphanum(),
  });

  doSubmit = () => {
    console.log("Submited");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            error={errors}
            value={data.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            error={errors}
            value={data.password}
            onChange={this.handleChange}
          />
          <button
            disabled={this.validate() ? true : false}
            className="btn btn-primary my-2"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
