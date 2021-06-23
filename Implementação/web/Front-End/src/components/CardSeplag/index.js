import React from 'react';

//styled components
import { Header, Container, CardTask } from './style';

//components
import Board from '../Board';

//import SearchProject from '../SearchProject';

const Boards = [
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
]

const CardSeplag = () => {
  return (
    <Container>
      {Boards.map(board => <Board key={board.id} user={board.user} />)}
    </Container>

  )
}

export default CardSeplag;
