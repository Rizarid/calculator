import React from 'react';

import './Button.css';

type ButtonProps = {
  value: string;
  isResultButton?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { value, isResultButton = false, onClick } = props;

  return (
    <button className={`button ${isResultButton && 'button_result'}`} onClick={onClick}>
      {value}
    </button>
  )
}