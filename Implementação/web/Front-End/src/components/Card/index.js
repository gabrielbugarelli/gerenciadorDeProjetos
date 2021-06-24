import React from 'react';

//styleds
import { Container, Header, ProjectTitle } from './style';

export default function Card(props) {
  return (
    <Container>
      <Header priority={props.priority} />
      <ProjectTitle>
        {props.title}
      </ProjectTitle>
      <p>{props.description}</p>
    </Container>
  )
}
