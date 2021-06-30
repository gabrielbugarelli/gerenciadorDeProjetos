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
      <Header>
        <SearchProject classAtividadeSetor="buttonAtividadeSetor" classButtonSetor="buttonSetor" title={'Setores'} list={setor} setList={setSetor} listButton={setorButton} setListButton={setSetorButton} typeSearch={'setor'} />
      </Header>

      <Tasks>
        {setor.map((item, key) => (

          <BoardComponent listaFuncionarios={item.funcionario} key={key} />
        ))}
      </Tasks>
    </Container>
  )
}


const BoardComponent = ({ listaFuncionarios }) => {



  return (


    <>
      {
        listaFuncionarios.map((funcionario, index) => (

          // <div style={{ width: "100%" }} key={index}>
          <FuncionarioComponent funcionario={funcionario} key={index} />
          // </div>
        )

        )
      }
    </>

  )

}


const FuncionarioComponent = ({ funcionario }) => {


  const [listaTarefas, setListaTarefas] = useState([])

  useEffect(() => {
    setListaTarefas(funcionario.tarefas)
  }, [])

  const drop = e => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    console.log(card)

    //chamada a api 

    console.log('chamar api')
    card.style.display = 'block';
    e.target.appendChild(card);

  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <Board
      className
      onDrop={drop}
      onDragOver={dragOver}
      draggable={true}
    >
      <div style={{ width: "100%" }}>
        <HeaderBoard>
          {funcionario.titulo}
        </HeaderBoard>

        <CardBoard>
          {
            listaTarefas.map((tarefa, key) => (

              <Card
                id={tarefa.titulo + '_' + key}
                key={key} title={tarefa.titulo}
                description={tarefa.descricao}
                priority={tarefa.prioridade}
              />

            ))
          }
        </CardBoard>
      </div>
    </Board>
  )
}

export default CardSeplag;
