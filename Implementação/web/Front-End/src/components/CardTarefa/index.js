import React from 'react';
import { Container, Task } from '../CardTarefa/style';
import { Card } from 'primereact/card';

const CardTarefa = () => {
  return (
    <Container>
      <div>Usuário</div>
      <Task>
        <Card title="Projeto" subTitle="Nome da tarefa" />
        <Card title="Projeto" subTitle="Nome da tarefa" />
      </Task>
      <Task>
        <Card title="Projeto" subTitle="Nome da tarefa" />
        <Card title="Projeto" subTitle="Nome da tarefa" />
      </Task>
    </Container>
  )
}

export default CardTarefa;