import * as React from 'react';
import { Container, Center } from '@mantine/core';
import Grid from '@mui/material/Grid';
import { Title } from '@mantine/core';

import ByRef from './ByRef';
import ByValue from './ByValue';

export default function App() {
  return (
    <Container>
      <Center>
        <div className="App">
          <Title order={1}>React State and Data types of ECMAScript</Title>
          <br />
          <br />
          <ByValue />
          <br />
          <br />
          <ByRef />
        </div>
      </Center>
    </Container>
  );
}
