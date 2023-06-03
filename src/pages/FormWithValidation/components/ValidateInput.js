
const ValidateInput = (props) => {
  const {
    label,
    errorMessage,
    id,
    errors,
    values,
    name,
    handleChange,
    handleBlur,
    handleFocus,
    ...inputProps
  } = props;

  return (
    <div className="form-inputs">
      <label className="form-label">{label}</label>
      <input
        {...inputProps}
        className="form-input"
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {errors[name] && <p>{errors[name]}</p>}
    </div>
  );
};

export default ValidateInput;
