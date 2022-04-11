/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DraggableState {
  name: string;
}

const initialState: DraggableState = {
  name: '',
};

export const draggableSlice = createSlice({
  name: 'draggable',
  initialState,
  reducers: {
    newDraggable: (state, action: PayloadAction<DraggableState>) => {
      state.name = action.payload.name;
    },
  },
});

export const { newDraggable } = draggableSlice.actions;

export default draggableSlice.reducer;
