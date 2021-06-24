import React, { useState } from 'react';
import { Container, ContainerSearchProject, IconSearchProject, ContainerListProject } from './styled';
import TarefasSearch from '../TarefasSearch'

const SearchProject = ({ title,list, setList, listButton  ,setListButton}) => {

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
                    {listButton.map((item, key) => (
                        <TarefasSearch
                            key={key}
                            data={item}
                            setList={setList}
                            setListButton={setListButton}
                            setActive={setActive}
                            active={active}
                        />
                    ))}
                </ContainerListProject>
            }
        </Container>
    );
}

export default SearchProject;
