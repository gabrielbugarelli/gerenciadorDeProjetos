import React from 'react';

//styles
import { Container, Header } from './styled';

//components
import Card from '../Card';

const Board = ({ user }) => {
  return (
    <Container>
      <Header> {user} </Header>
      <Card />
    </Container>
  );
}

export default Board;
