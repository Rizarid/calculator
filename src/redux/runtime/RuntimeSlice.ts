/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface RuntimeState {
  isRuntime: boolean;
}

const initialState: RuntimeState = {
  isRuntime: false,
};

export const runtimeSlice = createSlice({
  name: 'draggable',
  initialState,
  reducers: {
    switchRuntime: (state) => {
      state.isRuntime = !state.isRuntime;
    },
  },
});

export const { switchRuntime } = runtimeSlice.actions;

export default runtimeSlice.reducer;
