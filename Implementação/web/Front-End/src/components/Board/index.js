import React from 'react';

//styles
import { Container, Header, Cards } from './styled';

//components
import Card from '../Card';

const Board = ({ user }) => {
  return (
    <Container>
      <Header> {user} </Header>

      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  );
}

export default Board;
