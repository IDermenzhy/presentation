import styled from 'styled-components'

export const Container  = styled.div`
  width: 100%;   
  height: 100%;
  min-height: 100vh;
  background-color: rgb(27, 33, 44);
`
export const Content  = styled.div`
  display: flex;  
  padding: 40px 20px;
  flex-direction: column;
  justify-content: center;
  & span, p {
    color: #a1a1a1;
    font-size: 20px;
  }
  & input {
  width: 300px;
  }
`