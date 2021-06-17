import React from 'react'
import { Route } from 'react-router-dom';

import { EmptyPage } from '../pages/EmptyPage';
// import Teste from '../pages/teste'
// import CadastroPerfil from '../pages/cadastroPerfil'

const Router = () => {
    return (
        <>
            <Route path="/" exact component={EmptyPage} />
            {/* <Route path="/teste" exact component={Teste} /> */}
            {/* <Route path="/seguranca/cadastroPerfil" exact component={CadastroPerfil}  /> */}
        </>
    )
}

export default Router
