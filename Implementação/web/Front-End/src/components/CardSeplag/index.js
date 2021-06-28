import React, { useState } from 'react';

//styled components
import { Container, Tasks, Header } from './style';
import { Cards, HeaderBoard } from '../Board/styled';

//components
import Board from '../Board';
import Card from '../Card';
import SearchProject from '../SearchProject';

const CardSeplag = () => {

  const [board, setBoard] = useState([
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

  const [task, setTask] = useState([
    {
      id: 1,
      title: 'Projeto X',
      description: 'tela de loginNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN',
      priority: '#FFE500'
    },
    {
      id: 2,
      title: 'Sigadoc',
      description: 'O SITE CAIU',
      priority: '#F39436'
    },
    {
      id: 3,
      title: 'Projeto Y',
      description: 'segurança',
      priority: '#F39436'
    },
    {
      id: 4,
      title: 'Sigadoc',
      description: 'tela de login',
      priority: '#66C4CD'
    },
    {
      id: 5,
      title: 'Projeto X',
      description: 'tela de login',
      priority: '#FFE500'
    },
    {
      id: 6,
      title: 'Projeto X',
      description: 'tela de login',
      priority: '#66C4CD'
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
        {board.map(board => <Board key={board.id} user={board.user}>

          {/* <Cards>
            {task.map(task => <Card key={task.id} title={task.title} description={task.description} priority={task.priority} />)}
          </Cards> */}
        </Board>)}
      </Tasks>
    </Container>
  )
}

export default CardSeplag;
