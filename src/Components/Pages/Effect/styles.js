import styled from 'styled-components'

export const Container  = styled.div`
  width: 100%;   
  height: 100vh;
  min-height: 100vh;
  background-color: rgb(27, 33, 44);
`
export const H1 = styled.h1`
  font-size: 90px;
  color: #a1a1a1;
  position: absolute;
  top: calc(50% - 30px);
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) 
`
export const Image = styled.img`
  position: absolute;
  opacity: ${({visible})=> visible ? 1  : 0 };
  bottom: 50px;
  right: 50px;
  width: 300px;
  height: 200px;
  transition: 1s;
  border-radius: 10px;
`