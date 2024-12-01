import React, { useEffect, useRef } from 'react';
import cls from './RadioGroup.module.scss';

export const RadioGroup = (props) => {
  const {
    size,
    label,
    description,
    error,
    isRequired,
    children,
  } = props;

  const containerRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--radio-size', `var(--radio-size-${size})`);
    const container = containerRef.current;
    if (container) {
      container.style.setProperty('--container-font-size', `var(--input-font-size-${size})`);
    }
  });
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
