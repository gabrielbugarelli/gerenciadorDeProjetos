import React,{useState} from 'react';
import { Container,ContainerSearchProject,IconSearchProject,ContainerListProject } from './styled';
import TarefasSearch from '../TarefasSearch'

const SearchProject = ({projectsList, setProjectsList}) => {

    const [active, setActive] = useState(false);

    function hadleActive() {
        setActive(!active)
    }

    return (
        <Container>
            <ContainerSearchProject onClick={hadleActive}>
                Projetos
                <IconSearchProject className={`${active ? 'pi pi-angle-up': 'pi pi-angle-down'}`} />
            </ContainerSearchProject>
            {active &&
            
                <ContainerListProject>
                    {projectsList.map((item, key) => (
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
