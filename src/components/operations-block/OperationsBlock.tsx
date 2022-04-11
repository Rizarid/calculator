import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../button/Button';
import { useDraggable } from '../../hooks/useDraggable';
import { useComponentActive } from '../../hooks/useComponentActive';
import { ComponentProps, OPERATIONS_BLOCK_NAME } from '../types';
import { executeOperation } from '../../redux/calculator/CalculatorSlice';
import { AppState } from '../../redux/store';

import './OperationsBlock.css';

const OPERATIONS_LIST = ['/', 'x', '-', '+'];

export const OperationsBlock: React.FC<ComponentProps> = (props) => {
  const { fromPalette = false } = props;
  const dispatch = useDispatch();
  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);

  const isComponentActive = useComponentActive({
    componentName: OPERATIONS_BLOCK_NAME,
    fromPalette,
  });

  const {
    onDragStart,
    onDrop,
    onDragOver,
    onDragLeave,
    onDblClick,
  } = useDraggable({ componentName: OPERATIONS_BLOCK_NAME, fromPalette });

  const buttonClick = (value: string) => {
    dispatch(executeOperation(value));
  };

  const className = `operations-block row ${!isComponentActive ? 'operations-block_inactive' : ''} ${!fromPalette ? 'operations-block_added' : ''} ${isRuntime ? 'operations-block_isRuntime' : ''}`;

  return (
    <div
      className={className}
      key={OPERATIONS_BLOCK_NAME}
      draggable={isComponentActive && !isRuntime}
      onDragStart={onDragStart}
      onDragOver={!fromPalette ? onDragOver : undefined}
      onDragLeave={!fromPalette ? onDragLeave : undefined}
      onDrop={!fromPalette ? onDrop : undefined}
      onDoubleClick={!isRuntime ? onDblClick : undefined}
    >
      {OPERATIONS_LIST.map((item) => (
        <div className="operations-block__column col-3" key={item}>
          <Button onClick={buttonClick} value={item} disabled={!isComponentActive} />
        </div>
      ))}
    </div>
  );
};
