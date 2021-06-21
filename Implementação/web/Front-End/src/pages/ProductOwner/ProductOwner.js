import React from 'react';
import { Container,TitleProduct,TitleItemProjets } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ContainerProjects from '../../components/ContainerProjects'

const ProductOwner = () => {
    return (
        <Container>
            <TitleProduct>Product Owner Board</TitleProduct>
            <SearchProject/>
            <TitleItemProjets>Pendentes</TitleItemProjets>
            <ContainerProjects>

            </ContainerProjects>
            <CardSeplag />
        </Container>
    )
}

export default ProductOwner;
