import React from 'react';

//styles
import { Container, Header, Cards } from './styled';

//components
import Card from '../Card';


const tasks = [
  {
    title: 'Projeto X',
    description: 'tela de login',
    priority: '#FFE500'
  },
  {
    title: 'Sigadoc',
    description: 'O SITE CAIU',
    priority: '#F39436'
  },
  {
    title: 'Projeto Y',
    description: 'segurança',
    priority: '#F39436'
  },
  {
    title: 'Sigadoc',
    description: 'tela de login',
    priority: '#66C4CD'
  },
  {
    title: 'Projeto X',
    description: 'tela de login',
    priority: '#FFE500'
  },
  {
    title: 'Projeto X',
    description: 'tela de login',
    priority: '#66C4CD'
  },
]

const Board = ({ user }) => {
  return (
    <Container>
      <Header> {user} </Header>

      <Cards>
        {tasks.map(task => <Card key={task.title} title={task.title} description={task.description} priority={task.priority} />)}
      </Cards>
    </Container>
  );
}

export default Board;
