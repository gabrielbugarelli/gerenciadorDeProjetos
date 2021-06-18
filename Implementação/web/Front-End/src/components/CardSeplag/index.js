import React from 'react';

//styled components
import { Header, Container, CardTask } from './style';

//components
import CardTarefa from '../CardTarefa';
import SearchProject from '../SearchProject';

const CardSeplag = () => {
  return (
    <Container>
      {/* <Header>
        <SearchProject />
        <SearchProject />
      </Header> */}

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
