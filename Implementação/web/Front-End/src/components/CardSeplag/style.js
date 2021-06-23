import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  gap:1vw;
  padding: 0.5vw;
  height: 100%;
  width: 60vw;
  background-color: #E5E5E5;
  border-radius:15px;
  justify-content:center;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`
export const CardTask = styled.div`
  display:flex;
  gap: 1vw;
`