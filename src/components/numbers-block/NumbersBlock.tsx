import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../button/Button';
import { useDraggable } from '../../hooks/useDraggable';
import { useComponentActive } from '../../hooks/useComponentActive';
import { ComponentProps, NUMBERS_BLOCK_NAME } from '../types';
import { addChar } from '../../redux/calculator/CalculatorSlice';
import { AppState } from '../../redux/store';

import './NumbersBlock.css';

const NUMBERS_LIST = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const NumbersBlock: React.FC<ComponentProps> = (props) => {
  const { fromPalette = false } = props;
  const dispatch = useDispatch();

  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);
  const isComponentActive = useComponentActive({ componentName: NUMBERS_BLOCK_NAME, fromPalette });

  const {
    onDragStart,
    onDrop,
    onDragOver,
    onDragLeave,
    onDblClick,
  } = useDraggable({ componentName: NUMBERS_BLOCK_NAME, fromPalette });

  const buttonClick = (value: string) => {
    dispatch(addChar(value));
  };

  const className = `numbers-block row ${!isComponentActive ? 'numbers-block_inactive' : ''} ${!fromPalette ? 'numbers-block_added' : ''} ${isRuntime ? 'numbers-block_isRuntime' : ''}`;

  return (
    <div
      className={className}
      key={NUMBERS_BLOCK_NAME}
      draggable={isComponentActive && !isRuntime}
      onDragStart={onDragStart}
      onDragOver={!fromPalette ? onDragOver : undefined}
      onDragLeave={!fromPalette ? onDragLeave : undefined}
      onDrop={!fromPalette ? onDrop : undefined}
      onDoubleClick={!isRuntime ? onDblClick : undefined}
    >
      {NUMBERS_LIST.map((item) => (
        <div className="numbers-block__column col-4" key={item}>
          <Button onClick={buttonClick} value={item} disabled={!isComponentActive} />
        </div>
      ))}

      <div className="numbers-block__column col-8" key="0">
        <Button onClick={buttonClick} value="0" disabled={!isComponentActive} />
      </div>
      <div className="numbers-block__column col-4" key=",">
        <Button onClick={buttonClick} value="," disabled={!isComponentActive} />
      </div>
    </div>
  );
};
