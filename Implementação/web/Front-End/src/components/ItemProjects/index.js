import React, { useState } from 'react';
import { ContainerItemProjects, TitleItemProjects, IconItemProjects } from './styled'
import ContainerTarefas from '../ContainerTarefas';
import CreateTarefa from '../CreateTarefa';
import { LastMsg } from '../../styled'


const ItemProjects = ({ data }) => {
    const [active, setActive] = useState(false);
    function handleActive() {
        setActive(!active)
    }


    const drop = e => {
        e.preventDefault();

        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);

    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            onDrop={drop}
            onDragOver={dragOver}
        >
            <ContainerItemProjects onClick={handleActive}>
                <IconItemProjects className={`${active ? 'pi pi-minus' : 'pi pi-plus'}`} />
                <TitleItemProjects><LastMsg>{data.titulo}</LastMsg></TitleItemProjects>
            </ContainerItemProjects>
            {data.tarefas.map((item, key) => {
                return <ContainerTarefas data={item} id={item.titulo + '_' + key} key={key} Active={active} />
            })}
            <CreateTarefa Active={active} icon='pi pi-plus' />
        </div>

    );
}

export default ItemProjects;

