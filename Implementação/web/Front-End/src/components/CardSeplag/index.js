import React, { useState,useEffect } from 'react';

//styled components
import { Container, Tasks, Header } from './style';
import { Cards, HeaderBoard } from '../Board/styled';

//components
import Board from '../Board';
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
        console.log(res.data);
        setSetorButton(res.data)
    })
}, []);

  return (
    <Container>
      <Header>
      {/* title,list, setList, listButton  ,setListButton, typeSearch */}
        <SearchProject title={'Setor'} list={setor} setList={setSetor} listButton={setorButton} setListButton={setSetorButton} typeSearch={'setor'}/>
        {/* <SearchProject title={'Sprint'} list={sprint} setList={setSprint} /> */}
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
