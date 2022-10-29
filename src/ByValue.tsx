import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function ByValue() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const add = () => {
    setCount((count) => {
      console.log('inside 1:', count);
      return count + 1;
    });
    console.log('outside :', count);
  };

  const add2 = () => {
    setCount2((count2) => {
      console.log('inside 1:', count2);
      return count2 + 1;
    });
    setCount2((count2) => {
      console.log('inside 1:', count2);
      return count2 + 1;
    });
    console.log('outside :', count2);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>State with Primitives</h2>
          <Alert severity="info">{count}</Alert>
          <Button onClick={add} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
        <Grid item xs={6}>
          <h2>State with Primitives</h2>
          <Alert severity="info">{count2}</Alert>
          <Button onClick={add2} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
