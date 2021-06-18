import React from 'react';
import { Container, CardTask } from './style';
import CardTarefa from '../CardTarefa';

const CardSeplag = () => {
  return (
    <Container>
      <CardTask>
        <CardTarefa />
        <CardTarefa />
        <CardTarefa />
      </CardTask>
      <CardTask>
        <CardTarefa />
        <CardTarefa />
        <CardTarefa />
      </CardTask>
    </Container>

  )
}

export default CardSeplag;
