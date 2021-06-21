import React from 'react';
import {ContainerItemProjects,TitleItemProjects,IconItemProjects} from './styled'

const ItemProjects = ({data}) => {
    return (
        <ContainerItemProjects>
            <IconItemProjects className='pi pi-plus'/>
            <TitleItemProjects>{data.title}</TitleItemProjects>
        </ContainerItemProjects>
        
    );
}

export default ItemProjects;
