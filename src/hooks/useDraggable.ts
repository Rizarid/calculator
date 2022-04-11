import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../redux/store';
import { newDraggable } from '../redux/draggable/DraggableSlice';

import { INSERTION_PLACE_NAME } from '../components/types';
import {
  removeComponent,
  moveComponent,
  addInsertionPlace,
} from '../redux/added-components/AddedComponents';

interface UseDraggableProps {
  componentName: string;
  fromPalette: boolean;
}

export const useDraggable = (props: UseDraggableProps) => {
  const { componentName, fromPalette } = props;

  const dispatch = useDispatch();
  const draggable = useSelector((state: AppState) => state.draggable.name);
  const { componentsList } = useSelector((state: AppState) => state.addedComponents);

  const onDragStart = () => {
    dispatch(newDraggable({ name: componentName }));
  };

  const onDrop = (event: React.DragEvent) => {
    event.stopPropagation();
    dispatch(moveComponent({ moved: draggable, shifted: componentName }));
    dispatch(removeComponent(INSERTION_PLACE_NAME));
  };

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!componentsList.includes(INSERTION_PLACE_NAME)) {
      dispatch(addInsertionPlace({ moved: draggable, shifted: componentName }));
    }
  };

  const onDragLeave = () => {
    dispatch(removeComponent(INSERTION_PLACE_NAME));
  };

  const onDblClick = () => {
    if (!fromPalette) dispatch(removeComponent(componentName));
  };

  return {
    onDragStart,
    onDrop,
    onDragOver,
    onDragLeave,
    onDblClick,
  };
};
