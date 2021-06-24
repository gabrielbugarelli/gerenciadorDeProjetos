import React from 'react';

//styleds
import { Container, Header, ProjectTitle } from './style';
import { LastMsg } from '../../styled';

export default function Card(props) {
  return (
    <Container>
      <Header priority={props.priority} />
      <ProjectTitle>
        <LastMsg>
          {props.title}
        </LastMsg>
      </ProjectTitle>

      <LastMsg>
        {props.description}
      </LastMsg>
    </Container>
  )
}
