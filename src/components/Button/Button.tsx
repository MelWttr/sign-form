import React, { FC, memo, MouseEvent } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

interface ButtonProps {
  text: string,
  type: "button" | "submit" | "reset",
  className?: string,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = memo((props) => {
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
