import React from 'react';
import { MenuIcon, MenuArea } from './styled'

const MenuItem = ({ title, icon, link }) => {
    return (
        <MenuArea data-tip={title} data-for='tip-right'>
            <MenuIcon className={icon} />
        </MenuArea>
    )
}

export default MenuItem;