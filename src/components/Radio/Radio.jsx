import React from 'react';
import cn from 'classnames';
import { RadioCircle } from '../Icons/RadioCircle';
import cls from './Radio.module.scss';

export const Radio = (props) => {
  const {
    value,
    label,
    name,
    isChecked = true,
  } = props;

  return (
        <div className={cls.container}>
            <div className={cn(cls.wrapper, { [cls.checked]: isChecked })}>
                <input className={cls.input} type="radio" id={value} name={name} value={value}/>
                <RadioCircle/>
            </div>
            <label htmlFor={value} className={cls.label}>{label}</label>
        </div>
  );
};
