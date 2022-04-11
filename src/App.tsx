import React from 'react';

import { Palette } from './components/palette/Palette';
import { Canvas } from './components/canvas/Canvas';
import { RuntimeSwitcher } from './components/runtime-switcher/RuntimeSwitcher';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app container">
      <div className="app__content">
        <div className="app__switcher">
          <RuntimeSwitcher />
        </div>
        <Palette />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
