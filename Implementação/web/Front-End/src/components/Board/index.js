import React, { useState } from 'react';

//styles
import { Container, Header, Cards } from './styled';

//components
import Card from '../Card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const tasks = [
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
]

const Board = ({ user }) => {
  const [task, setTask] = useState(tasks);

  return (

    <Container>
      <DragDropContext onDropEnd={result => console.log(result)}>
        <Header> {user} </Header>

        <Cards>
          {task.map(task => <Card key={task.id} title={task.title} description={task.description} priority={task.priority} />)}
        </Cards>
      </DragDropContext>
    </Container>
  );
}

export default Board;
