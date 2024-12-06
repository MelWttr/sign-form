import React, { memo } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

export const Button = memo((props) => {
  const {
    text,
    onClick,
    type,
    className,
  } = props;

  return (
    <button
      className={cn(cls.button, { [className]: !!className })}
      onClick={onClick}
      type={type}
      >
        {text}
      </button>
  );
});

Button.displayName = 'Button';
