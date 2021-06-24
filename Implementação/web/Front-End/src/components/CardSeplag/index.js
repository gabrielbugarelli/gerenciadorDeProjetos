import React, { useState } from 'react';

//styled components
import { Container, Tasks, Header } from './style';

//components
import Board from '../Board';
import SearchProject from '../SearchProject';

const CardSeplag = () => {

  const [task, setTask] = useState([
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
  ])

  const [setor, setSetor] = useState([
    { "title": 'setor 1' },
    { "title": 'setor 1' },
    { "title": 'setor 1' },
    { "title": 'setor 1' },
    { "title": 'setor 1' },
  ])

  const [sprint, setSprint] = useState([
    { "title": 'sprint 1' },
    { "title": 'sprint 1' },
    { "title": 'sprint 1' },
    { "title": 'sprint 1' },
    { "title": 'sprint 1' },
  ])

  return (
    <Container>
      <Header>
        <SearchProject title={'Setor'} list={setor} setList={setSetor} />
        <SearchProject title={'Sprint'} list={sprint} setList={setSprint} />
      </Header>
      <Tasks>
        {task.map(board => <Board key={board.id} user={board.user} />)}
      </Tasks>
    </Container>
  )
}

export default CardSeplag;
