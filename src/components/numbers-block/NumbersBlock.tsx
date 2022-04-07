import React from 'react';

import { Button } from '../button/Button';

import './NumbersBlock.css';


export const NumbersBlock: React.FC = () => {
  
  function buttonClick(value: string) {
    console.log(value);
  }

  const numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  return (
    <div className="numbers-block row" draggable={true}>
      {numbersList.map((item) => (
        <div className="numbers-block__column col-4">
          <Button onClick={buttonClick.bind(null, item)} value={item} />
        </div>
      ))}

      <div className="numbers-block__column col-8">
        <Button onClick={buttonClick.bind(null, '0')} value="0" />
      </div>
      <div className="numbers-block__column col-4">
        <Button onClick={buttonClick.bind(null, ',')} value="," />
      </div>
    </div>
    
  )
}