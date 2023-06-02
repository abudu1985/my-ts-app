const validationInfo = new Map([
  ["username", [required(), maxLength(4), minLength(2)]],
  ["email", [required(), validEmail()]],
  ["password", [required(), minLength(6)]],
  ["password2", [required(), minLength(6), confirmMatchWithKey("password")]],
]);

const capitalize = (key) => key.charAt(0).toUpperCase() + key.slice(1);

function required() {
  return function ({ value, key }) {
    return value.trim().length
      ? undefined
      : `${capitalize(key)} is required field`;
  };
}

function maxLength(number) {
  return function ({ value, key }) {
    return value.trim().length < number
      ? undefined
      : `${capitalize(key)} needs to be less then ${number}`;
  };
}

function minLength(number) {
  return function ({ value, key }) {
    return value.trim().length >= number
      ? undefined
      : `${capitalize(key)} needs to be ${number} characters or more`;
  };
}

function validEmail() {
  return function ({ value }) {
    const regexp = /\S+@\S+\.\S+/;
    return regexp.test(value.trim()) ? undefined : `Email address is invalid`;
  };
}

function confirmMatchWithKey(field) {
  return function ({ value, allValues }) {
    return value === allValues[field] ? undefined : `Passwords do not match`;
  };
}

export default validationInfo;
