import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

import './Button.css';

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
  isResultButton?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);

  const {
    value,
    isResultButton = false,
    onClick,
    disabled = false,
  } = props;

  const buttonClick = () => {
    onClick(value);
  };

  const className = `button ${isResultButton ? 'button_result' : ''} ${isRuntime ? 'button_isRuntime' : ''}`;

  return (
    <button
      type="button"
      className={className}
      onClick={buttonClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
