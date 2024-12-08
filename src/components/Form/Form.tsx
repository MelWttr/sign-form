import React, { ChangeEvent, FC, FormEvent, ReactNode } from 'react';
import cls from './Form.module.scss';
import { Button } from '../Button/Button';

interface FormProps {
  submitText: string;
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({
  onSubmit, onChange, submitText, children,
}) => (
  <form className={cls.form} onChange={onChange} onSubmit={onSubmit} noValidate>
    {children}
    <Button className={cls.submit} type='submit' text={submitText}/>
  </form>

);
