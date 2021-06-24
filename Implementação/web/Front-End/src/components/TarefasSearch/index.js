import React from 'react';
import { Container } from './styled';

const TarefasSearch = ({data}) => {
    return (
        <Container>
            {data.title}
        </Container>
    );
}

export default TarefasSearch;
