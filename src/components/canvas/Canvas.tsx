import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../redux/store';
import { useDropContainer } from '../../hooks/useDropContainer';
import { ComponentsFactory } from '../components-factory/ComponentsFactory';

import image from './empty.svg';
import './Canvas.css';

export const Canvas: React.FC = () => {
  const { componentsList } = useSelector((state: AppState) => state.addedComponents);
  const { onDrop, onDragOver, onDragLeave } = useDropContainer();

  return (
    <div
      className={`canvas ${!componentsList.length ? 'canvas_empty' : ''}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {!componentsList.length && <img src={image} alt="empty" className="canvas__empty-image" />}
      {componentsList.map((item) => <ComponentsFactory type={item} key={item} />)}
    </div>
  );
};
