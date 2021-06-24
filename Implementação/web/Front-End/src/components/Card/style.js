import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  width: 9vw;
  padding: 6px;
  background-color: white;
  border-radius: 10px;
  /* box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8); */
  color: #5F5E5E;
  cursor: pointer;

  &:hover{
    height: 10.2vh;
    width: 9.2vw;
  }
`
export const Header = styled.header`
  width: 60%;
  height: 1vh;
  border-radius: 20px;
  margin-bottom:5px;
  background-color: ${props => props.priority};
`

export const ProjectTitle = styled.h5`
  margin-top: -1px;
  margin-bottom: -1px;
  font-size: 19px;
  font-weight:bold ;
`