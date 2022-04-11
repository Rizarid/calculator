import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useDraggable } from '../../hooks/useDraggable';
import { useComponentActive } from '../../hooks/useComponentActive';
import { Button } from '../button/Button';
import { ComponentProps, RESULT_BUTTON_NAME } from '../types';
import { getResult } from '../../redux/calculator/CalculatorSlice';
import { AppState } from '../../redux/store';

import './ResultButton.css';

export const ResultButton: React.FC<ComponentProps> = (props) => {
  const { fromPalette = false } = props;
  const dispatch = useDispatch();
  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);
  const isComponentActive = useComponentActive({ componentName: RESULT_BUTTON_NAME, fromPalette });

  const {
    onDragStart,
    onDrop,
    onDragOver,
    onDragLeave,
    onDblClick,
  } = useDraggable({ componentName: RESULT_BUTTON_NAME, fromPalette });

  const buttonClick = () => {
    dispatch(getResult());
  };

  const className = `result-button row ${!isComponentActive ? 'result-button_inactive' : ''} ${!fromPalette ? 'result-button_added' : ''} ${isRuntime ? 'result-button_isRuntime' : ''}`;

  return (
    <div
      className={className}
      draggable={isComponentActive && !isRuntime}
      onDragStart={onDragStart}
      onDragOver={!fromPalette ? onDragOver : undefined}
      onDragLeave={!fromPalette ? onDragLeave : undefined}
      onDrop={!fromPalette ? onDrop : undefined}
      onDoubleClick={!isRuntime ? onDblClick : undefined}
    >
      <div className="result-button__column col-12">
        <Button onClick={buttonClick} value="=" disabled={!isComponentActive} isResultButton />
      </div>
    </div>
  );
};
