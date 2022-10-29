import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Title } from '@mantine/core';

export default function ByValue() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10);

  const add = () => {
    setCount((count) => {
      console.log('inside ', count);
      return count + 1;
    });
    console.log('outside :', count);
  };

  const add2 = async () => {
    await setCount2((count2) => {
      console.log('inside 1:', count2);
      return count2 + 1;
    });
    console.log('outside 1:', count2);
    await setCount2((count2) => {
      console.log('inside 2:', count2);
      return count2 + 1;
    });
    console.log('outside 2:', count2);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Title order={3} color="blue.5">
            State with Primitives
          </Title>
          <Alert severity="info">{count}</Alert>
          <Button size="small" onClick={add} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Title order={3} color="blue.5">
            State with Primitives(Async?)
          </Title>
          <Alert severity="info">{count2}</Alert>
          <Button size="small" onClick={add2} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
