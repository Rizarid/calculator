/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

import { NumbersBlock } from '../numbers-block/NumbersBlock';
import { ResultButton } from '../result-button/ResultButton';
import { InsertionPlace } from '../insertion-place/InsertionPlace';
import { OperationsBlock } from '../operations-block/OperationsBlock';
import { Display } from '../display/Display';
import {
  NUMBERS_BLOCK_NAME,
  RESULT_BUTTON_NAME,
  OPERATIONS_BLOCK_NAME,
  DISPLAY_NAME,
  INSERTION_PLACE_NAME,
} from '../types';

interface ComponentsFactoryProps {
  type: string;
  fromPalette?: boolean;
}

export const ComponentsFactory: React.FC<ComponentsFactoryProps> = (props) => {
  const { type, fromPalette = false } = props;

  if (type === DISPLAY_NAME) return (<Display fromPalette={fromPalette} />);
  if (type === OPERATIONS_BLOCK_NAME) return (<OperationsBlock fromPalette={fromPalette} />);
  if (type === NUMBERS_BLOCK_NAME) return (<NumbersBlock fromPalette={fromPalette} />);
  if (type === RESULT_BUTTON_NAME) return (<ResultButton fromPalette={fromPalette} />);
  if (type === INSERTION_PLACE_NAME) return (<InsertionPlace />);

  return null;
};
