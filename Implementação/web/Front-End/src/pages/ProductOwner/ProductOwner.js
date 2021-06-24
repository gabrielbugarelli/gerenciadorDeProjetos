import React, { useState, useEffect } from 'react';
import { Container, TitleProduct, TitleItemProjects, ContainerProjects, PendingArea, TaskBoard, } from './ProductOwner-style';
import CardSeplag from '../../components/CardSeplag';
import SearchProject from '../../components/SearchProject'
import ItemProjects from '../../components/ItemProjects'

const ProductOwner = () => {
    const [projectsList, setProjectsList] = useState([
        { "projectId": 1, "title": "Deblaração de bens", "tarefas":
         [  {'tarefaId':'1','title':'Criar tela de login fsadf sdafsad ffdsadf asfsadf'},
            {'tarefaId':'2','title':'Criar barra de Rolagem'} 
        ]},
        { "projectId": 2, "title": "Segundo Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Criar tela de login 2'},
            {'tarefaId':'2','title':'Criar barra de Rolagem 2'},
            {'tarefaId':'3','title':'teste'}
        ]},
        { "projectId": 3, "title": "Terceiro Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 4, "title": "Quarto Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 5, "title": "Quinto Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 6, "title": "Sexto Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 7, "title": "Setimo Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 8, "title": "Oitavo Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 9, "title": "Nono Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 10, "title": "Decimo Projeto", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
        { "projectId": 11, "title": "Decimo Primeiro Projetofasdfa fsadfsadfasdff", "tarefas":
         [  {'tarefaId':'1','title':'Fazer footer'},
            {'tarefaId':'2','title':'Fazer menu'} 
        ]},
    ]);

    // useEffect(() => {

    //     window.$http.get('/projeto').then((res) => {
    //         console.log(res)
    //         setProjectsList(res.data)
    //     })

    // }, []);


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

