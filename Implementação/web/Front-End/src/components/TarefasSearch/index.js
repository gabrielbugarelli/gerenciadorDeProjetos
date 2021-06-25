import React,{useEffect,useState} from 'react';
import { Container } from './styled';
import {LastMsg} from '../../styled'

const TarefasSearch = ({data,setList,setListButton,setActive,active}) => {


    function handleSearch() {
        window.$http.get(`/projeto?projectId=${data.projectId}`).then((res) => {
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
