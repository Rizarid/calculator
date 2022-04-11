/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DISPLAY_NAME, INSERTION_PLACE_NAME } from '../../components/types';

export interface ConstructorState {
  componentsList: string[];
}

const initialState: ConstructorState = {
  componentsList: [],
};

export const addedComponentsSlice = createSlice({
  name: 'componentsAdded',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<string>) => {
      action.payload === DISPLAY_NAME
        ? state.componentsList.unshift(action.payload)
        : state.componentsList.push(action.payload);
    },

    removeComponent: (state, action: PayloadAction<string>) => {
      state.componentsList = state.componentsList.filter((item) => item !== action.payload);
    },

    moveComponent: (state, action: PayloadAction<{ moved: string, shifted: string }>) => {
      const { moved, shifted } = action.payload;
      const indexOfMoved = state.componentsList.indexOf(moved);

      (indexOfMoved > -1) && state.componentsList.splice(indexOfMoved, 1);
      const indexOfShifted = state.componentsList.indexOf(shifted);

      switch (DISPLAY_NAME) {
        case moved:
          state.componentsList.splice(0, 0, moved);
          break;

        case shifted:
          state.componentsList.splice(indexOfShifted + 1, 0, moved);
          break;

        default:
          state.componentsList.splice(indexOfShifted, 0, moved);
      }
    },

    addInsertionPlace: (state, action: PayloadAction<{ moved: string, shifted: string }>) => {
      const { moved, shifted } = action.payload;
      state.componentsList = state.componentsList.filter((item) => item !== INSERTION_PLACE_NAME);

      switch (DISPLAY_NAME) {
        case moved:
          state.componentsList.splice(0, 0, INSERTION_PLACE_NAME);
          break;

        case shifted:
          state.componentsList.splice(1, 0, INSERTION_PLACE_NAME);
          break;

        default: {
          const indexOfShifted = state.componentsList.indexOf(shifted);
          state.componentsList.splice(indexOfShifted, 0, INSERTION_PLACE_NAME);
        }
      }
    },
  },
});

export const {
  addComponent,
  removeComponent,
  moveComponent,
  addInsertionPlace,
} = addedComponentsSlice.actions;

export default addedComponentsSlice.reducer;
