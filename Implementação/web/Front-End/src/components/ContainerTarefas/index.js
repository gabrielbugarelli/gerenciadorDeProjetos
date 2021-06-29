import React from 'react';
import {Container,TitleTarefa} from'./styled'
import CreateTarefa from '../CreateTarefa';
import {LastMsg} from '../../styled'

const ContainerTarefas = ({data,Active}) => {

    // {   
    //     const arrastar = document.querySelectorAll("[draggable='true']");
    //     arrastar.addEventListener("dragstar", comecarArrastar);

    // }

    function comecarArrastar() {
        console.log('começou a arrastar');
    }


    return (
        <>
            {Active  &&
                <>
                    <Container draggable='true' onDragStart={comecarArrastar}>
                        <TitleTarefa><LastMsg>{data.title}</LastMsg></TitleTarefa>
                    </Container>
                </>
            }
            
        </>
        
    );
}

export default ContainerTarefas;
