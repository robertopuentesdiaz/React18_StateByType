import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function ByRef() {
  const [obj, setObj] = useState([10]);

  const add = () => {
    setObj((obj) => {
      obj[0] += 1;
      console.log('inside :', obj);
      return [...obj];
    });
    console.log('outside :', obj);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button size="large" variant="text">
            State with Objects
          </Button>
          <Alert severity="info">{obj[0]}</Alert>
          <Button size="small" onClick={add} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}
