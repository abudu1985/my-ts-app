import { useState, useEffect } from "react";

const useForm = (initialValues, callback, validationInfo) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dirtyFields, setDirtyFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const errorsObj = validateValues(dirtyFields);
    setErrors(errorsObj);
  };

  const handleFocus = (e) => {
    const { name, value } = e.target;
    setDirtyFields((current) => [...new Set([...current, name])]);
  };

  const validateValues = (fields = []) => {
    const errorsObj = {};
    if (!validationInfo.size) return errorsObj;

    const iteratedMap = fields.length
      ? new Map([...validationInfo].filter(([key, v]) => fields.includes(key)))
      : validationInfo;

    for (let [key, functions] of iteratedMap.entries()) {
      const error = functions
        .reduce((acc, func) => {
          acc.push(func({ value: values[key], allValues: values, key }));
          return acc;
        }, [])
        .find((element) => !!element);
      if (error) errorsObj[key] = error;
    }
    return errorsObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsObj = validateValues();
    setErrors(errorsObj);
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleBlur,
    handleFocus,
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
