import React from 'react';
import { Container } from './styled';
import {LastMsg} from '../../styled'

const TarefasSearch = ({data}) => {
    return (
        <Container>
            <LastMsg>{data.title}</LastMsg>
        </Container>
    );
}

export default TarefasSearch;
