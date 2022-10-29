import * as React from 'react';
import { useState } from 'react';
import { getRand } from './Utils';

export default function ByValue() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => {
      console.log('inside 1:', getRand(), count);
      return count + 1;
    });
    // setCount((count) => {
    //   console.log("inside 2:", getRand(), count);
    //   return count + 1;
    // });
    console.log('outside :', getRand(), count);
  };

  return (
    <div>
      <h2>State with Primitives</h2>
      <h3>{count}</h3>
      <h3>
        <button onClick={add}>ADD COUNT</button>
      </h3>
    </div>
  );
}
