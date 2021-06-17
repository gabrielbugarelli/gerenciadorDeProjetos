import React, { useState } from 'react';
import {BodyMenu} from './styled'


export const AppMenu = (props) => {
    return (
        <BodyMenu>
            <MenuItem title='Usuario' icon='' link=''/>
            <MenuItem title='Pessoas' icon='' link=''/>
            <MenuItem title='Sprint' icon='' link=''/>
            <MenuItem title='Backlog' icon='' link=''/>
            <MenuItem title='Projetos' icon='' link=''/>
            <MenuItem title='Adicionar' icon='' link=''/>
        </BodyMenu>
    );
}
