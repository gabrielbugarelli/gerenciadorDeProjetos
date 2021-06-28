import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20.5vw;
  height: calc(100% - 56.5%);
  border-radius: 15px;
  font-size: 1.1vw;
  background-color:#005494;
  color: white;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
`
export const Header = styled.header`
  position: relative;
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