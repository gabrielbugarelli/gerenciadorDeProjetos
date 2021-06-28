import React, { useState, useEffect } from 'react';
import { Container, TitleProduct, TitleItemProjects, ContainerProjects, PendingArea, TaskBoard, } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ItemProjects from '../../components/ItemProjects'

const ProductOwner = () => {
    const [projectsList, setProjectsList] = useState([]);
    const [projectsListButton, setProjectsListButton] = useState([]);

    useEffect(() => {
        window.$http.get('http://localhost:3000/projeto').then((res) => {
            setProjectsList(res.data)
            setProjectsListButton(res.data)
        })
    }, []);

    return (
        <Container>
            <PendingArea>
                <TitleProduct>Product Owner Board</TitleProduct>
                <SearchProject
                    title={'Projetos'}
                    list={projectsList}
                    setList={setProjectsList}
                    listButton={projectsListButton}
                    setListButton={setProjectsListButton} 
                    typeSearch={'projeto'}
                />
                <TitleItemProjects>Pendentes</TitleItemProjects>
                <ContainerProjects>
                    {projectsList.map((item, key) => (
                        <ItemProjects key={key}
                            data={item}
                        />
                    ))}
                </ContainerProjects>
            </PendingArea>
            <CardSeplag />
        </Container>
    )
}

export default ProductOwner;

