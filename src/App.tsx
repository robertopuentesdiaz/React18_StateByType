import * as React from 'react';
import { Container, Center } from '@mantine/core';
import { Title } from '@mantine/core';

import ByRef from './ByRef';
import ByValue from './ByValue';

export default function App() {
  return (
    <Container>
      <Center>
        <div className="App">
          <Title order={1}>React State and Data types of ECMAScript</Title>
          <ByValue />
          <ByRef />
        </div>
      </Center>
    </Container>
  );
}
