import React,{useState} from 'react';
import {SplitButton} from 'primereact/splitbutton';
import './styled.css';

const SearchProject = ({projectList,setProjectList}) => {
    const id = [];
    const items = [
        {
            label: 'Projeto 1',
            id:1,
            command: (e,id,label) => {
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

    // const [items, setItems] = useState([
    //     {
    //         label: 'Projeto 1',
    //         id:1,
    //         command: (e,id,label) => {
    //             handleclique(id)

    //         }
           
    //     },
    //     {
    //         label: 'Projeto 2',
    //         id:2,
    //         command: (e,id) => {
    //             handleclique(id)
    //         }
            
    //     },
    //     {
    //         label: 'Projeto 3 ',
            
            
    //     },
    //     {   label: 'Projeto 4',
            
            
    //     },
    //     {   label: 'Projeto 5',
            
            
    //     }



    // ]);
    
    function handleclique(id) {
        
    }
    return (
        <>
            <SplitButton label="Projetos" model={items} className='style-split' />
        </>
    )
}

export default SearchProject;
