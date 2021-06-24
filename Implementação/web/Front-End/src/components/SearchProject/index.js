import React, { useState } from 'react';
import { Container, ContainerSearchProject, IconSearchProject, ContainerListProject } from './styled';
import TarefasSearch from '../TarefasSearch'

const SearchProject = ({ list, setList, title }) => {

    const [active, setActive] = useState(false);

    function hadleActive() {
        setActive(!active)
    }

    return (
        <Container>
            <ContainerSearchProject onClick={hadleActive}>
                {title}
                <IconSearchProject className={`${active ? 'pi pi-angle-up' : 'pi pi-angle-down'}`} />
            </ContainerSearchProject>
            {active &&
                <ContainerListProject>
                    {list.map((item, key) => (
                        <TarefasSearch
                            key={key}
                            data={item}
                        />
                    ))}
                </ContainerListProject>
            }
        </Container>
    );
}

export default SearchProject;
