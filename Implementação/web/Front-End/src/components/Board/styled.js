import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 21vw;
  border-radius: 10px;
  height: calc(100% - 51%);
  background-color: #F0E38C;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`
export const Header = styled.header`
  font-weight: bold;
  text-align: center;
  margin: 0.5vw;
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3vw;
  /* max-width: 18vw; */
`