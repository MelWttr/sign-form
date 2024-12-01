import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import { RadioCircle } from '../Icons/RadioCircle';
import cls from './Radio.module.scss';

interface RadioProps {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  isChecked?: boolean;
}

export const Radio: FC<RadioProps> = (props) => {
  const {
    value,
    onChange,
    label,
    name,
    isChecked,
  } = props;

  return (
        <div className={cls.container}>
            <div className={cn(cls.wrapper, { [cls.checked]: isChecked })}>
                <input className={cls.input} type="radio" id={value} name={name} value={value} onChange={onChange} />
                <RadioCircle />
            </div>
            <label htmlFor={value} className={cls.label}>{label}</label>
        </div>
  );
};
