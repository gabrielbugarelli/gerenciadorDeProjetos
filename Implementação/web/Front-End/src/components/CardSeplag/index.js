import React, { useState, useEffect } from 'react';

//styled components
import { Container, Board, HeaderBoard, CardBoard, Tasks, Header } from './style';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './estilo.css';

//components
import Card from '../Card';
import SearchProject from '../SearchProject';

const CardSeplag = () => {

  const [board, setBoard] = useState([])

  const [task, setTask] = useState([])


  const [setorButton, setSetorButton] = useState([]);
  const [setor, setSetor] = useState([]);


  useEffect(() => {
    window.$http.get('http://localhost:3000/setor').then((res) => {
      setSetor(res.data)
      // console.log(res.data);
      setSetorButton(res.data)
    })
  }, []);

  return (
    <Container>
      <DragDropContext>
        <Header>
          <SearchProject classAtividadeSetor="buttonAtividadeSetor" classButtonSetor="buttonSetor" title={'Setores'} list={setor} setList={setSetor} listButton={setorButton} setListButton={setSetorButton} typeSearch={'setor'} />
        </Header>
        <Tasks>
          {setor.map((item, key) => (
            <Board key={key}>
              {item.funcionario.map((item, key1) => (
                <div style={{ width: "100%" }} key={key1}>
                  <HeaderBoard>
                    {item.titulo}
                  </HeaderBoard>

                  <CardBoard>
                    {
                      item.tarefas.map((item, key) => (
                        <Card key={key} title={item.titulo} description={item.descricao} priority={item.prioridade} />
                      ))
                    }
                  </CardBoard>
                </div>
              ))}
            </Board>
          ))}
        </Tasks>
      </DragDropContext>
    </Container>
  )
}

export default CardSeplag;
