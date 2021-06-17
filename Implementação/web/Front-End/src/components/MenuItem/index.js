import React from 'react';
import { MenuIcon, MenuArea } from './styled'

const MenuItem = ({ title, icon, link }) => {
    return (
        <MenuArea>
            <MenuIcon className={icon} />
        </MenuArea>
    )
}

export default MenuItem;