import React from 'react';
import {Container,TitleTarefa} from'./styled'
import CreateTarefa from '../CreateTarefa';

const ContainerTarefas = ({data,Active}) => {
    return (
        <>
            {Active  &&
                <>
                    <Container>
                        <TitleTarefa>{data}</TitleTarefa>
                    </Container>
                </>
            }
            
        </>
        
    );
}

export default ContainerTarefas;
