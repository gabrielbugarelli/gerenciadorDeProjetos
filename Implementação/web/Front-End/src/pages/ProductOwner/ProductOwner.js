import React from 'react';
import { Container,TitleProduct } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'

const ProductOwner = () => {
    return (
        <Container>
            <TitleProduct>Product Owner Board</TitleProduct>
            <SearchProject/>
            <CardSeplag />
        </Container>
    )
}

export default ProductOwner;
