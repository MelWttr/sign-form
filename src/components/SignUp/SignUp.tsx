import React, { FC } from 'react';
import { Input } from '../Input/Input';
import { Form } from '../Form/Form';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Radio } from '../Radio/Radio';
import { Email } from '../Icons/Email';
import { FormValues } from '../../interfaces/form-values';
import { onSubmit } from '../../types/form-submit-type';
import { UseForm } from '../../hooks/useForm';

interface SignInProps {
  onSubmit: onSubmit<FormValues>;
}

const initialValues: FormValues = {
  name: '',
  nickname: '',
  email: '',
  sex: '',
  password: '',
  repeatPassword: '',
};

export const SignUp: FC<SignInProps> = ({ onSubmit }) => {
  const { errors, handleChange, handleSubmit } = UseForm<FormValues>(onSubmit, initialValues);

  return (
  <Form onChange={handleChange} onSubmit={handleSubmit} submitText='Sign up'>
      <Input
        name='name'
        type='text'
        error={errors?.name}
        label='Enter your name:'
        isRequired
        placeholder='Enter name here'
        focused
      />
      <Input
        name='nickname'
        type='text'
        error={errors?.nickname}
        label='Enter your nickname:'
        placeholder='Enter nickname here'
        focused
      />
      <Input
        name='email'
        type='email'
        error={errors?.email}
        LeftSection={Email}
        label='Enter your email:'
        isRequired
        placeholder='Enter email here'
        focused
      />
      <RadioGroup
        label='Choose sex'
        error={errors?.sex}
        isRequired
      >
        <Radio
          value='male'
          label='Male'
          name='sex'
        />
        <Radio
          value='female'
          label='Female'
          name='sex'
        />
      </RadioGroup>
      <Input
        name='password'
        type='password'
        error={errors?.password}
        label='Enter your password:'
        isRequired
        placeholder='Enter password here'
      />
      <Input
        name='repeatPassword'
        type='password'
        error={errors?.repeatPassword}
        label='Repeat password:'
        isRequired
        placeholder='Enter password here'
      />
  </Form>
  );
};
