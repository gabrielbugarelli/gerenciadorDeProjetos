import styled from "styled-components";

export const Container = styled.div`
  /* display:flex; */
  /* flex-direction: column; */
  
  justify-content:center;
  align-items: center;
  padding: 0.5vw;
  height: 100%;
  width: 67vw;
  /* background-color: #E5E5E5; */
  background-color: white;
  border-radius:15px;
  box-shadow: 0 1px 4px 0 rgb(102, 102, 102, 0.3);

`
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
  justify-content: space-around;
  margin-bottom: 2vh;
`;