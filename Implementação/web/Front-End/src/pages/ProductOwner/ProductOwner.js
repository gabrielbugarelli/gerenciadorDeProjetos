import React, { useState,useEffect } from 'react';
import { Container, TitleProduct, TitleItemProjects, ContainerProjects, ContainerGeral } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ItemProjects from '../../components/ItemProjects'

const ProductOwner = () => {
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        
        window.$http.get('/projeto').then((res)=>{
            console.log(res)
            setProjectsList(res.data)
        })
        
    }, []);


    return (

        <Container>
            <TitleProduct>Product Owner Board</TitleProduct>
            <SearchProject />
            <TitleItemProjects>Pendentes</TitleItemProjects>
            <ContainerGeral>

                <ContainerProjects>
                    {projectsList.map((item, key) => (
                        <ItemProjects key={key}
                            data={item}
                        />
                    ))}
                </ContainerProjects>
                <CardSeplag />
            </ContainerGeral>

        </Container>

    )
}

export default ProductOwner;

