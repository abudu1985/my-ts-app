import React, { useState } from "react";
// import './Form.css';
import FormSignup from "./FormSignup";
// import FormSuccess from './FormSuccess';
import FormWithValidationStyled from "./style";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <FormWithValidationStyled>
        <div className="form-container">
          <FormSignup submitForm={submitForm} />
        </div>
      </FormWithValidationStyled>
    </>
  );
};

export default Form;
