import { ChangeEvent, FormEvent, useState } from "react";
import { getErrors } from "../helpers/get-errors";
import { FormValues } from "../interfaces/form-values";
import { onSubmit } from "../types/form-submit-type";

type Errors = Partial<Record<keyof FormValues, string>>;

export const UseForm = <T extends Partial<FormValues>>(
  onSubmit: onSubmit<T>,
  initialValues: T
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors>(null);

  const handleChange = (evt: ChangeEvent<HTMLFormElement>): void => {
    const { name, value } = evt.target;
    if (name in values) {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    setErrors(null);

    const newErrors = getErrors(values);

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit }
}