import React from 'react';
import cls from './Form.module.scss';
import { Button } from '../Button/Button';

export const Form = ({
  onSubmit, onChange, submitText, children,
}) => (
  <form className={cls.form} onChange={onChange} onSubmit={onSubmit} noValidate>
    {children}
      <Button className={cls.submit} type='submit' text={submitText}/>
  </form>

);
