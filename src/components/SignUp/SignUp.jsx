import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Form } from '../Form/Form';
import { RadioGroup } from '../RadioGroup/RadioGroup';
import { Radio } from '../Radio/Radio';
import { getErrors } from '../../helpers/get-errors';
import { Email } from '../Icons/Email';

const initialValues = {
  name: '',
  nickname: '',
  email: '',
  sex: '',
  password: '',
  repeatPassword: '',
};

export const SignUp = ({ onSubmit }) => {
  const [values, setValues] = useState(initialValues);

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
