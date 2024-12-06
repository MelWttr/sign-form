import {
  validateEmail, validatePassword, validateRepeatedPassword, validateTextInput,
} from './inputs-validation';

export const getErrors = (values) => Object.entries(values).reduce((acc, [key, val]) => {
  let error;
  switch (key) {
    case 'password':
      error = validatePassword(val);
      break;
    case 'repeatPassword':
      error = validateRepeatedPassword(values.password, val);
      break;
    case 'email':
      error = validateEmail(val);
      break;
    default:
      error = validateTextInput(val);
      break;
  }
  if (error) {
    acc[key] = error;
  }
  return acc;
}, {});
