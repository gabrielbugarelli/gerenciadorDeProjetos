import React from 'react';
import { Container,TitleProduct,TitleItemProjets } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ItemProjects from '../../components/ItemProjects'

const ProductOwner = () => {
    return (
        <Container>
            <TitleProduct>Product Owner Board</TitleProduct>
            <SearchProject/>
            <TitleItemProjets>Pendentes</TitleItemProjets>
            <ItemProjects></ItemProjects>
            <CardSeplag />
        </Container>
    )
}

export default ProductOwner;
