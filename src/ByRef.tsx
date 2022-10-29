import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

export default function ByRef() {
  const [noPrim, setNoPrim] = useState([10]);

  const add = () => {
    setNoPrim((noPrim) => {
      noPrim[0] += 1;
      console.log('inside :', noPrim);
      return [...noPrim];
    });
    console.log('outside :', noPrim);
  };

  return (
    <div>
      <h2>State with No Primitives</h2>
      <h3>{noPrim[0]}</h3>
      <h3>
        <button onClick={add}>ADD COUNT</button>
      </h3>
    </div>
  );
}
