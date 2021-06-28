import React,{useEffect,useState} from 'react';
import { Container } from './styled';
import {LastMsg} from '../../styled'

const TarefasSearch = ({data,setList,setListButton,setActive,active,typeSearch}) => {
    // const filtro = data.title
    function handleSearch() {
        window.$http.get(`http://localhost:3000/${typeSearch}?Id=${data.Id}`).then((res) => {
                setList(res.data)
        })
        setActive(!active)
    }

    return (
        <Container onClick={handleSearch}>
            <LastMsg>{data.title}</LastMsg>
        </Container>
    );
}

export default TarefasSearch;
