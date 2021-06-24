import React,{useState} from 'react';
import {ContainerItemProjects,TitleItemProjects,IconItemProjects} from './styled'
import ContainerTarefas from '../ContainerTarefas';
import CreateTarefa from '../CreateTarefa';
import {LastMsg} from '../../styled'


const ItemProjects = ({data}) => {
    const [active, setActive] = useState(false);
    function handleActive() {
        setActive(!active)
    }
    return (
        <>
            <ContainerItemProjects onClick={handleActive}>
                <IconItemProjects className={`${active  ? 'pi pi-minus' : 'pi pi-plus'}`}/>
                <TitleItemProjects><LastMsg>{data.title}</LastMsg></TitleItemProjects>
            </ContainerItemProjects>
            {data.tarefas.map((item,key)=>(
                    <ContainerTarefas data={item} Active={active}/>
            ))}
            <CreateTarefa Active={active} icon='pi pi-plus'/>
        </>
        
    );
}

export default ItemProjects;

