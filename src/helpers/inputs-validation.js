import { PASSWORD_MIN_LENGTH } from '../constants';

export const validateTextInput = (inputValue) => {
  if (!inputValue) {
    return 'Field shouldn\'t be empty';
  }
  return null;
};

export const validatePassword = (inputValue) => {
  const error = validateTextInput(inputValue);
  if (error) {
    return error;
  }
  if (inputValue.length < PASSWORD_MIN_LENGTH) {
    return `Password sholdn't be less than ${PASSWORD_MIN_LENGTH} symbols`;
  }

  return null;
};

export const validateRepeatedPassword = (passwordValue, inputValue) => {
  const error = validateTextInput(inputValue);
  if (error) {
    return error;
  }
  if (inputValue !== passwordValue) {
    return 'Passwords aren\'t equal';
  }
  return null;
};

export const validateEmail = (inputValue) => {
  const error = validateTextInput(inputValue);
  if (error) {
    return error;
  }
  const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
  if (!String(inputValue).match(emailRegx)) {
    return 'Enter correct email address';
  }
  return null;
};