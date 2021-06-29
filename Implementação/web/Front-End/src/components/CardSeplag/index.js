import React, { useState, useEffect } from 'react';

//styled components
import { Container, Board, HeaderBoard, CardBoard, Tasks, Header } from './style';


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
        {/* title,list, setList, listButton  ,setListButton, typeSearch */}
        <SearchProject title={'Setor'} list={setor} setList={setSetor} listButton={setorButton} setListButton={setSetorButton} typeSearch={'setor'} />
        {/* <SearchProject title={'Sprint'} list={sprint} setList={setSprint} /> */}
        {console.log(setor.user)}
      </Header>
      <Tasks>
        {setor.map((item, key) => (
          <Board>
            {item.user.map((item, key) => (
              <>
                <HeaderBoard>
                  {item.title}
                </HeaderBoard>

                <CardBoard>
                  {
                    item.tarefas.map((item, key) => (
                      <Card key={key} title={item.title} description={item.description} priority={item.priority} />
                    ))
                  }
                </CardBoard>

              </>
            ))}
          </Board>
        ))}
      </Tasks>
    </Container>
  )
}

export default CardSeplag;
