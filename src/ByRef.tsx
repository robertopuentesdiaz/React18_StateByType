import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Title } from '@mantine/core';

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
        <Grid item xs={12}>
          <Title order={3} color="blue.5">
            State with Objects(Async?)
          </Title>
          <Alert severity="info">{obj[0]}</Alert>
          <Button size="small" onClick={add} variant="contained">
            ADD COUNT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
