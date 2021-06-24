import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 20.5vw;
  height: calc(100% - 55%);
  border-radius: 15px;
  font-size: 1.1vw;
  /* background-color: #F0E38C; */
  background-color: #D4D4D4;
  color: #5F5E5E;
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
  justify-content: space-evenly;
  gap: 0.3vw;
`