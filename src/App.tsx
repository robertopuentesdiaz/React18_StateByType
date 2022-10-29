import * as React from 'react';
import '../style.css';

import ByRef from './ByRef';
import ByValue from './ByValue';

export default function App() {
  return (
    <div className="App">
      <h1>React State by Data types of ECMAScript</h1>

      <ByValue />

      <ByRef />
    </div>
  );
}
