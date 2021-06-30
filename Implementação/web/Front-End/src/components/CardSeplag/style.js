import styled from "styled-components";

export const Container = styled.div`  
  justify-content:center;
  align-items: center;
  padding: 0.5vw;
  height: 100%;
  width: 67vw;
  background-color: white;
  border-radius:15px;
  box-shadow: 0 1px 4px 0 rgb(102, 102, 102, 0.3);
`
export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  
  width: 20.5vw;
  height: calc(100% - 56.5%);
  border-radius: 15px;
  font-size: 1.1vw;
  background-color:#005494;
  color: white;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`;

export const CardBoard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  width: 100%;
`;

export const HeaderBoard = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 0.5vw;
`;

export const Tasks = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap:1vw;
  max-width: 100%;
  height: 95%;
  overflow-y: scroll;
  ::-webkit-scrollbar{
        width: 10px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, 0.2);;
    }
`
export const Header = styled.header`
display: flex;
justify-content: center;
  margin-bottom: 2vh;
  width: 100%;
`;