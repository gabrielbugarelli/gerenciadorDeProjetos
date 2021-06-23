import styled from 'styled-components';

export const Container = styled.div`
display: flex;
gap: 1vw;
  width:100%;
  height: 100vh;
  padding:1.5vw;
`;
export const TitleProduct = styled.h3`
  cursor: default;
  color: #7A7A7A;
  width: 15vw;
`;

export const TitleItemProjects = styled.h4`
  cursor: default;
  color: #7A7A7A;
  width: 10vw;
`;

export const ContainerProjects = styled.div`
  height: 100%;
  width: 25vw;
  border-radius: 15px;
  background-color: #EDEDED;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`;

export const PendingArea = styled.div`
  display: flex;
  flex-direction :column ;
  justify-content:space-between;
  height: 95%;
`;

export const TaskBoard = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  background: black;
  height: 80%;
`;

