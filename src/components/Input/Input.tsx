import { InputHTMLAttributes, FC } from 'react';
import InputStyle from './Input.module.css';
import cn from 'classnames';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isValid?: boolean;
};

export const Input: FC<InputProps> = ({ isValid = true, className, ...props }) => {
  return (
    <input
      className={cn(InputStyle.input, className, {
        [InputStyle.invalid]: !isValid, 
      })}
      {...props}
    />
  );
};
