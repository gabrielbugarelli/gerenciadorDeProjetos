import React from 'react';

//styled components
import { Container, Tasks, Header } from './style';

//components
import Board from '../Board';

//import SearchProject from '../SearchProject';

const boards = [
  {
    id: 1,
    user: 'Gabriel',
  },
  {
    id: 2,
    user: 'Nelcael',
  },
  {
    id: 3,
    user: 'Toka',
  },
  {
    id: 4,
    user: 'Pedro',
  },
  {
    id: 5,
    user: 'Elvister',
  },
  {
    id: 6,
    user: 'Ilessa',
  },
  {
    id: 7,
    user: 'Eduardo',
  },
  {
    id: 8,
    user: 'Kaue',
  },
  {
    id: 9,
    user: 'Claudia',
  },
]

const CardSeplag = () => {
  return (
    <Container>
      <Header>
        <label> <strong>Setor</strong></label>
        <label><strong>Sprint</strong></label>
      </Header>
      <Tasks>
        {boards.map(board => <Board key={board.id} user={board.user} />)}
      </Tasks>
    </Container>
  )
}

export default CardSeplag;
