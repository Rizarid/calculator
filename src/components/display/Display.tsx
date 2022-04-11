import React from 'react';
import { useSelector } from 'react-redux';

import { useDraggable } from '../../hooks/useDraggable';
import { useComponentActive } from '../../hooks/useComponentActive';
import { ComponentProps, DISPLAY_NAME } from '../types';
import { AppState } from '../../redux/store';

import './Display.css';

export const Display: React.FC<ComponentProps> = (props) => {
  const { fromPalette = false } = props;
  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);
  const displayValue = useSelector((state: AppState) => state.calculator.displayValue);

  const isComponentActive = useComponentActive({
    componentName: DISPLAY_NAME,
    fromPalette,
  });

  const {
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
    onDblClick,
  } = useDraggable({ componentName: DISPLAY_NAME, fromPalette });

  const isDraggable = isComponentActive && fromPalette && !isRuntime;
  const className = `display row ${!isComponentActive ? 'display_inactive' : ''} ${!fromPalette ? 'display_added' : ''}`;

  return (
    <div
      className={className}
      key={DISPLAY_NAME}
      draggable={isDraggable}
      onDragStart={onDragStart}
      onDragOver={!fromPalette ? onDragOver : undefined}
      onDragLeave={!fromPalette ? onDragLeave : undefined}
      onDrop={!fromPalette ? onDrop : undefined}
      onDoubleClick={!isRuntime ? onDblClick : undefined}
    >
      <div className="display__column col-12">
        <input
          className="display__field"
          type="text"
          readOnly
          value={(isRuntime && displayValue) ? displayValue.replace('.', ',') : '0'}
        />
      </div>
    </div>
  );
};
