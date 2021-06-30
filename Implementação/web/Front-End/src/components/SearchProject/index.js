import React, { useState } from 'react';
import { Container, ContainerSearchProject, IconSearchProject, ContainerListProject } from './styled';
import TarefasSearch from '../TarefasSearch'
import AllTarefas from '../AllTarefas'

const SearchProject = ({ classButtonSetor, classAtividadeSetor, title, list, setList, listButton, setListButton, typeSearch }) => {

    const [active, setActive] = useState(false);

    function hadleActive() {
        setActive(!active)
    }

    function handleAllTarefas() {
        setList(listButton)
        setActive(!active)
    }

    return (
        <Container>
            <ContainerSearchProject onClick={hadleActive} className={classButtonSetor}>
                {title}
                <IconSearchProject className={`${active ? 'pi pi-angle-up' : 'pi pi-angle-down'}`} />
            </ContainerSearchProject>
            {active &&
                <ContainerListProject className={classAtividadeSetor} >
                    {listButton.map((item, key) => (
                        <TarefasSearch
                            key={key}
                            data={item}
                            setList={setList}
                            setListButton={setListButton}
                            setActive={setActive}
                            active={active}
                            typeSearch={typeSearch}
                        />
                    ))}
                    
                        <AllTarefas title={`Todos os ${title}`} onClick={handleAllTarefas} />
                    
                </ContainerListProject>
            }
        </Container>
    );
}

export default SearchProject;
