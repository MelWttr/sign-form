import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Email } from '../Icons/Email';
import { Form } from '../Form/Form';
import { getErrors } from '../../helpers/get-errors';

export const SignIn = ({ onSubmit }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState(null);

  const handleChange = (evt) => {
    setValues((prevValues) => ({
      ...prevValues,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(null);
    const newErrors = getErrors(values);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      onSubmit(values);
    }
  };

  return (
  <Form onChange={handleChange} onSubmit={handleSubmit} submitText='Sign In'>
      <Input
        name='email'
        type='email'
        error={errors?.email}
        LeftSection={Email}
        label='Enter your login:'
        isRequired
        placeholder='Enter login here'
        focused
      />
      <Input
        name='password'
        type='password'
        error={errors?.password}
        label='Enter your password:'
        isRequired
        placeholder='Enter password here'
      />
  </Form>

  );
};
