import React, { FC } from 'react';
import { Input } from '../Input/Input';
import { Email } from '../Icons/Email';
import { Form } from '../Form/Form';
import { FormValues } from '../../interfaces/form-values';
import { UseForm } from '../../hooks/useForm';
import { onSubmit } from '../../types/form-submit-type';


type InitialValuesState = Pick<FormValues, 'email' | 'password'>;

interface SignInProps {
  onSubmit: onSubmit<InitialValuesState>;
}

const initialValues = {
  email: '',
  password: '',
}

export const SignIn: FC<SignInProps> = ({ onSubmit }) => {
  const { errors, handleChange, handleSubmit } = UseForm<InitialValuesState>(onSubmit, initialValues);

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
