import React from 'react';
import { Container,IconCreateTarefa,TitleCreateTarefa } from './styled';

const CreateTarefa = ({Active,icon}) => {
    return (
        <>
            {Active  &&
                <>
                    <Container>
                        <IconCreateTarefa className={icon}/>
                        <TitleCreateTarefa>Adicione uma tarefa</TitleCreateTarefa>
                    </Container>
                </>
            }
        </>
    );
}

export default CreateTarefa;
