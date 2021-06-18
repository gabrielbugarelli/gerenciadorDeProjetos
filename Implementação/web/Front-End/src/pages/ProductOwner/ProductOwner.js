import React from 'react';
import { Container,TitleProduct } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';

const ProductOwner = () => {
    return (
        <Container>
            <TitleProduct>Product Owner Board</TitleProduct>
            
            <CardSeplag />
        </Container>
    )
}

export default ProductOwner;
