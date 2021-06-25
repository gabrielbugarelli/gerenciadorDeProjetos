import React from 'react';
import {Container} from './styled'

const AllTarefas = ({title,onClick}) => {
    return (
        <Container onClick={onClick}>
            {title}
        </Container>
    );
}

export default AllTarefas;
