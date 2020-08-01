import React from 'react';

import { Container, Content } from './styles';

import logo from '~/assets/profits.svg';

function Home() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Finance" />
        <div>
          <h1>Search for stock quotes</h1>
          <h2>Enter a symbol like:</h2>
          <p>Facebook: fb</p>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
