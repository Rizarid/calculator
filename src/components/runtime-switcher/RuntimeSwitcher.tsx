import React, { KeyboardEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { switchRuntime } from '../../redux/runtime/RuntimeSlice';
import { AppState } from '../../redux/store';

import runtimeImage from './runtime.svg';
import constructorImage from './constructor.svg';
import './RuntimeSwitcher.css';

export const RuntimeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector((state: AppState) => state.runtime.isRuntime);

  const onClick = () => {
    dispatch(switchRuntime());
  };

  const onKeyPress = (event: KeyboardEvent) => {
    if (event.code === 'enter') onClick();
  };

  return (
    <div
      className={`runtime-switcher ${isRuntime ? 'runtime-switcher_isRuntime' : ''}  row`}
      role="switch"
      aria-checked="false"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      <div className="runtime-switcher__block runtime-switcher__block_runtime col-6">
        <img src={runtimeImage} alt="runtime" className="runtime-switcher__image" />
        <span className="runtime-switcher__text">Runtime</span>
      </div>
      <div className="runtime-switcher__block runtime-switcher__block_constructor col-6">
        <img src={constructorImage} alt="constructor" className="runtime-switcher__image" />
        <span className="runtime-switcher__text">Constructor</span>
      </div>
    </div>
  );
};
