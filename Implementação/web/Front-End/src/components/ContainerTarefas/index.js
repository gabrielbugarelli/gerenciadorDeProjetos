import React from 'react';
import { Container, TitleTarefa } from './styled'
import CreateTarefa from '../CreateTarefa';
import { LastMsg } from '../../styled'

const ContainerTarefas = ({ data, Active, id }) => {

    // {   
    //     const arrastar = document.querySelectorAll("[draggable='true']");
    //     arrastar.addEventListener("dragstar", comecarArrastar);

    // }


    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <>
            {/* {Active && */}
            <div id={id} onDragStart={dragStart} onDragOver={dragOver} draggable={true}>
                <Container  >
                    <TitleTarefa><LastMsg>{data.titulo}</LastMsg></TitleTarefa>
                </Container>
            </div>
            {/* } */}

        </>

    );
}

export default ContainerTarefas;
