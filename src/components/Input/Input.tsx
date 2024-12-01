import React, { useEffect, useRef, FC, CSSProperties } from 'react';
import cn from 'classnames';
import cls from './Input.module.scss';
import { size } from '../../types/size-type';
import { getContainerFontSize } from '../../helpers/get-container-font-size';
interface InputProps {
  id: string;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
  description?: string;
  placeholder?: string;
  LeftSection?: FC<{style?: CSSProperties}>;
  RightSection?: FC<{style?: CSSProperties}>;
  error?: string;
  focused?: boolean;
  size?: size;
  radius?: size;
  type?: string;
  viewType?: string;
}

export const Input: FC<InputProps> = (props) => {
  const {
    id,
    label,
    isRequired,
    disabled,
    description,
    placeholder,
    LeftSection,
    RightSection,
    error,
    focused,
    size = 'xs',
    radius = 'sm',
    type = 'text',
    viewType,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const container = containerRef.current;

    if (input) {
      document.documentElement.style.setProperty('--input-padding', `var(--input-padding-${size})`);
      input.style.setProperty('--input-radius', `var(--input-radius-${radius})`);
      input.style.setProperty('--input-height', `var(--input-height-${size})`);

      if (focused) {
        input.focus();
      }
      if (LeftSection) {
        input.style.setProperty('padding-left', `calc(var(--input-padding-${size}) * 2)`);
        document.documentElement.style.setProperty('--input-left-section-size', `var(--input-padding-${size} * 2.5)`);
      }
      if (RightSection) {
        input.style.setProperty('padding-right', `calc(var(--input-padding-${size}) * 2)`);
        document.documentElement.style.setProperty('--input-right-section-size', `var(--input-padding-${size} * 2.5)`);
      }
    }
    if (container) {
      container.style.setProperty('--container-font-size', `var(--input-font-size-${size})`);
    }
  }, [size, error, viewType, radius, focused, LeftSection, RightSection]);

  return (
    <div className={cn(cls.container)} style={getContainerFontSize(size)}>
      {
        label && <label className={cls.label} htmlFor={id}>
          {label}
          {isRequired && <span className={cls.required}> *</span>}
        </label>
      }
      {
        description && <p className={cls.description}>{description}</p>
      }
      <div className={cn(cls.wrapper, { [cls.error]: Boolean(error) })}>
        {LeftSection
          && <div className={cn(cls.icon, cls.left)}>
              <LeftSection style={{
                width: `var(--input-icon-width-${size})`,
                height: `var(--input-icon-width-${size})`,
              }}/>
            </div>}
        {RightSection
          && <div className={cn(cls.icon, cls.right)}>
                <RightSection style={{
                  width: `var(--input-icon-width-${size})`,
                  height: `var(--input-icon-width-${size})`,
                }}/>
              </div>}
        <input
          ref={inputRef}
          disabled={disabled}
          className={cn(
            cls.input,
            cls[viewType],
            {
              [cls.error]: !!error,
              [cls[viewType]]: !!viewType,
              [cls.disabled]: disabled,
            },
          )}
          type={type} id={id}
          placeholder={placeholder} />
      </div>
      {error && <p className={cls['error-text']}>{error}</p>}
    </div>
  );
};
