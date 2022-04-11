import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../redux/store';
import { INSERTION_PLACE_NAME, DISPLAY_NAME } from '../components/types';
import {
  removeComponent,
  addComponent,
  addInsertionPlace,
} from '../redux/added-components/AddedComponents';

export const useDropContainer = () => {
  const dispatch = useDispatch();
  const draggable = useSelector((state: AppState) => state.draggable.name);
  const { componentsList } = useSelector((state: AppState) => state.addedComponents);

  const onDragOver = (event: React.DragEvent) => {
    const { target } = event;
    event.preventDefault();

    if (target instanceof HTMLElement) {
      if (componentsList.length) {
        if (!componentsList.includes(INSERTION_PLACE_NAME)) {
          draggable === DISPLAY_NAME
            ? dispatch(addInsertionPlace({ moved: draggable, shifted: componentsList[0] }))
            : dispatch(addComponent(INSERTION_PLACE_NAME));
        }
      } else target.style.backgroundColor = '#F0F9FF';
    }
  };

  const onDragLeave = (event: React.DragEvent) => {
    const { target } = event;
    if (target instanceof HTMLElement) {
      componentsList.length
        ? dispatch(removeComponent(INSERTION_PLACE_NAME))
        : target.style.backgroundColor = '#FFFFFF';
    }
  };

  const onDrop = (event: React.DragEvent) => {
    const { target } = event;

    if (componentsList.includes(draggable)) dispatch(removeComponent(draggable));
    dispatch(removeComponent(INSERTION_PLACE_NAME));
    dispatch(addComponent(draggable));

    if (target instanceof HTMLElement) target.style.backgroundColor = '#FFFFFF';
  };

  return {
    onDrop,
    onDragOver,
    onDragLeave,
  };
};
