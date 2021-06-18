import React from 'react';
import {SplitButton} from 'primereact/splitbutton';
import './styled.css';

const SearchProject = () => {
    // const id = [];
    const items = [
        {
            label: 'Projeto 1',
            id:1,
            command: (e,id,label) => {
                alert(id)
                handleclique(id)

            }
           
        },
        {
            label: 'Projeto 2',
            id:2,
            command: (e,id) => {
                handleclique(id)
            }
            
        },
        {
            label: 'Projeto 3 ',
            
            
        },
        {   label: 'Projeto 4',
            
            
        },
        {   label: 'Projeto 5',
            
            
        }
    ]
    
    function handleclique(id) {
        console.log('nelcael '+id);
    }
    return (
        <>
            <SplitButton label="Projetos" model={items} className='teste' />
            
            
        </>

        
    )
}

export default SearchProject;
