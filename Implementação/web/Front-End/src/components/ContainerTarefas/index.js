import React from 'react';
import {Container,TitleTarefa} from'./styled'
import CreateTarefa from '../CreateTarefa';
import {LastMsg} from '../../styled'

const ContainerTarefas = ({data,Active}) => {
    return (
        <>
            {Active  &&
                <>
                    <Container>
                        <TitleTarefa><LastMsg>{data.title}</LastMsg></TitleTarefa>
                    </Container>
                </>
            }
            
        </>
        
    );
}

export default ContainerTarefas;
