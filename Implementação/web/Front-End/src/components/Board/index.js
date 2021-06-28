import React, { useState } from 'react';

//styles
import { Container, Header, Cards } from './styled';

const Board = ({ user }) => {

  return (
    <Container>
      <Header>{user}</Header>

      <Cards>
        <p>teste</p>
      </Cards>
    </Container>
  );
}

export default Board;
