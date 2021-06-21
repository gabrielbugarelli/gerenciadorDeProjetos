import React,{useState} from 'react';
import { Container,TitleProduct,TitleItemProjects,ContainerProjects } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ItemProjects from '../../components/ItemProjects'

const ProductOwner = () => {
    const [projectsList, setProjectsList] = useState([
        {projectId:1, title:'Primeiro Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:2, title:'Segundo Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:1, title:'Terceiro Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:2, title:'Quarto Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:1, title:'5 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:2, title:'6 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:1, title:'7 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:2, title:'8 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:1, title:'9 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:2, title:'10 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:1, title:'11 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:2, title:'12 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        {projectId:1, title:'13 Projeto',tarefas:['tarefa 1', 'tarefa 2']},
        
        
        
    ]);
    return (
        <Container>
            <TitleProduct>Product Owner Board</TitleProduct>
            <SearchProject/>
            <TitleItemProjects>Pendentes</TitleItemProjects>
            <ContainerProjects>
                {projectsList.map((item,key)=>(
                    <ItemProjects key={key}
                     data={item}
                    />
                ))}
            </ContainerProjects>
            <CardSeplag />
        </Container>
    )
}

export default ProductOwner;

