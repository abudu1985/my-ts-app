import React from "react";

import useForm from "./hooks/useForm";
import ValidateInput from "./components/ValidateInput";
import validationInfo from "./validateinfo";

const FormSignup = ({ submitForm }) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  const { handleSubmit, ...inputProps } = useForm(
    initialValues,
    submitForm,
    validationInfo
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Create your account by filling out the information below.</h1>
        <ValidateInput
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          {...inputProps}
        />
        <ValidateInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          {...inputProps}
        />
        <ValidateInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          {...inputProps}
        />
        <ValidateInput
          label="Confirm password"
          type="password2"
          name="password2"
          placeholder="Confirm your password"
          {...inputProps}
        />
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
