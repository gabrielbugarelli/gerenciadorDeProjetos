import React,{useState} from 'react';
import {ContainerItemProjects,TitleItemProjects,IconItemProjects} from './styled'
import ContainerTarefas from '../ContainerTarefas';
import CreateTarefa from '../CreateTarefa';
const ItemProjects = ({data}) => {
    const [active, setActive] = useState(false);
    function handleActive() {
        setActive(!active)
    }
    return (
        <>
            <ContainerItemProjects onClick={handleActive}>
                <IconItemProjects className='pi pi-plus'/>
                <TitleItemProjects>{data.title}</TitleItemProjects>
            </ContainerItemProjects>
            {data.tarefas.map((item,key)=>(
                    <ContainerTarefas data={item} Active={active}/>
            ))}
            <CreateTarefa Active={active} icon='pi pi-plus'/>
        </>
        
    );
}

export default ItemProjects;
