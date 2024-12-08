import {
  validateEmail,
  validatePassword,
  validateRepeatedPassword,
  validateTextInput,
} from './inputs-validation';

type Errors<T> = Partial<Record<keyof T, string>> 

export const getErrors = <T extends Record<string, any>>(values: T): Errors<T> => {
  return Object.entries(values).reduce<Errors<T>>((acc, [key, val]) => {
    let error: string | undefined;

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
      acc[key as keyof T] = error;
    }

    return acc;
  }, {});
};