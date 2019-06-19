import styled from 'styled-components'

export const Container  = styled.div`
  width: 100%;   
  height: 100%;
  min-height: 100vh;
  background-color: rgb(27, 33, 44);
`
export const Content = styled.div`
  height: calc(100% - 60px);
  padding: 40px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Input = styled.input`
  outline-color: red;
  margin-right: 10px;
  border: none;
  background-color: #a1a1a1;
  &:focus  {
    background-color: #fff;
  }
`