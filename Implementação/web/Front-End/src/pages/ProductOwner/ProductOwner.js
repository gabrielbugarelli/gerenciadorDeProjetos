import React, { useState, useEffect } from 'react';
import { Container, TitleProduct, TitleItemProjects, ContainerProjects, PendingArea, TaskBoard } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ItemProjects from '../../components/ItemProjects'

const ProductOwner = () => {
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {

        window.$http.get('/projeto').then((res) => {
            console.log(res)
            setProjectsList(res.data)
        })

    }, []);


    return (

        <Container>
            <PendingArea>
                <TitleProduct>Product Owner Board</TitleProduct>
                <SearchProject projectsList={projectsList} setProjectsList={setProjectsList} />
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

