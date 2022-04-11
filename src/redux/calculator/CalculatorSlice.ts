/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OPERATIONS, round } from './Operations';

interface CalculatorState {
  displayValue: string;
  isFloatValue: boolean;
  currentOperation: string;
  result: number;
  isShowedResult: boolean;
}

const initialState: CalculatorState = {
  displayValue: '',
  isFloatValue: false,
  currentOperation: '',
  result: 0,
  isShowedResult: false,
};

const MAXIMUM_CHARACTERS = 13;

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addChar: (state, action: PayloadAction<string>) => {
      if (state.isShowedResult) {
        state.displayValue = '';
        state.isShowedResult = false;
      }

      if (state.displayValue.length < MAXIMUM_CHARACTERS) {
        switch (action.payload) {
          case ',': {
            if (!state.isFloatValue) {
              state.displayValue += (state.displayValue) ? '.' : '0.';
              state.isFloatValue = true;
            }
            break;
          }
          case '0': {
            state.displayValue += (state.displayValue === '0') ? '' : '0';
            break;
          }
          default: state.displayValue += action.payload;
        }
      }
    },

    executeOperation: (state, action: PayloadAction<string>) => {
      const operation = OPERATIONS.get(state.currentOperation);
      if (operation) {
        if (state.displayValue === '') state.displayValue = '0';

        state.result = operation(state.result, state.displayValue);
        state.currentOperation = action.payload;

        state.displayValue = '';
        state.isShowedResult = false;
        state.isFloatValue = false;
      }
    },

    getResult: (state) => {
      if (!state.isShowedResult) {
        const operation = OPERATIONS.get(state.currentOperation);
        if (operation) {
          if (state.displayValue === '') state.displayValue = '0';

          state.result = operation(state.result, state.displayValue);

          state.displayValue = (state.result !== Infinity)
            ? round(state.result, MAXIMUM_CHARACTERS)
            : 'Не определено';

          state.result = 0;
          state.currentOperation = '';
          state.isShowedResult = true;
          state.isFloatValue = false;
        }
      }
    },
  },
});

export const { addChar, executeOperation, getResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;
