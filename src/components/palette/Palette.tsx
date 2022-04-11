import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { ComponentsFactory } from '../components-factory/ComponentsFactory';

import {
  DISPLAY_NAME,
  NUMBERS_BLOCK_NAME,
  OPERATIONS_BLOCK_NAME,
  RESULT_BUTTON_NAME,
} from '../types';

import './Palette.css';

export const Palette: React.FC = () => {
  const components = [DISPLAY_NAME, OPERATIONS_BLOCK_NAME, NUMBERS_BLOCK_NAME, RESULT_BUTTON_NAME];
  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);

  return (
    <div className={`palette ${isRuntime ? 'palette_isRuntime' : ''}`}>
      { components.map((item) => (
        <ComponentsFactory type={item} fromPalette />
      ))}
    </div>
  );
};
