import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  width: auto;
  padding: 6px;
  background-color: white;
  border-radius: 10px;
  color: #5F5E5E;
  cursor: pointer;

  &:hover{
    background-color: #F3F3F3;
  }
`
export const Header = styled.header`
  width: 60%;
  height: 1vh;
  border-radius: 20px;
  margin-bottom:5px;
  background-color: ${(props) => {
    if (props.priority == 'ALTA') {
      return 'red';
    }
    if (props.priority == 'MEDIA') {
      return 'yellow';
    }
    if (props.priority == 'BAIXA') {
      return 'green';
    }
  }};
`
export const ProjectTitle = styled.h5`
  margin-top: -1px;
  margin-bottom: -1px;
  font-size: 19px;
  font-weight:bold ;
`