import { configureStore } from '@reduxjs/toolkit';

import addedComponentsReducer from './added-components/AddedComponents';
import draggableReducer from './draggable/DraggableSlice';
import runtimeReducer from './runtime/RuntimeSlice';
import calculatorReducer from './calculator/CalculatorSlice';

export const store = configureStore({
  reducer: {
    addedComponents: addedComponentsReducer,
    draggable: draggableReducer,
    runtime: runtimeReducer,
    calculator: calculatorReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
