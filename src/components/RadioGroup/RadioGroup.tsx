import React, { useEffect, useRef, ReactNode, FC, CSSProperties } from 'react';
import cls from './RadioGroup.module.scss';
import { size } from '../../types/size-type';

interface RadioGroupProps {
  size: size,
  label?: string,
  description?: string,
  error?: string,
  isRequired?: boolean,
  children: ReactNode;

}

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    size = 'sm',
    label,
    description,
    error,
    isRequired,
    children,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--radio-size', `var(--radio-size-${size})`);
    const container = containerRef.current;
    if (container) {
      container.style.setProperty('--container-font-size', `var(--input-font-size-${size})`);
    }
  }, [size]);
  
  return (
    <div ref={containerRef} className={cls.container}>
      {label
      && <p className={cls.label}>
        {label}
        {isRequired && <span className={cls.required}> *</span>}
      </p>}
        {description && <p className={cls.description}>{description}</p>}
        <div className={cls['radio-wrapper']}>
          {children}
        </div>
        {error && <p className={cls['error-text']}>{error}</p>}
    </div>
  );
};
