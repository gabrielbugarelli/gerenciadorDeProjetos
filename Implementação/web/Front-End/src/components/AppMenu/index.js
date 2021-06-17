import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import {BodyMenu} from './styled'


export const AppMenu = (props) => {
    return (
        <BodyMenu>
            <MenuItem title='Usuario' icon='pi pi-user' link=''/>
            <MenuItem title='Pessoas' icon='pi pi-users' link=''/>
            <MenuItem title='Sprint' icon='pi pi-file-o' link=''/>
            <MenuItem title='Backlog' icon='pi pi-id-card' link=''/>
            <MenuItem title='Projetos' icon='pi pi-folder-open' link=''/>
            <MenuItem title='Adicionar' icon='pi pi-plus' link=''/>
        </BodyMenu>
    );
}
