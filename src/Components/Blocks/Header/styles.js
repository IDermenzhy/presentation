import styled from 'styled-components'
import {Link} from "react-router-dom";

export const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
`
export const TabItem = styled(Link)`
  text-decoration: none;
  padding: 10px 5px;
  color: #fff;
  margin-right: 15px;
  &:after {
    display: block;
    content: "";
    height: 2px;
    width: ${({isActive}) => isActive ? '100%' : 0};
    background-color: ${({isActive}) => isActive ? '#ffeb3b' : '#a1a1a1'};
    transition: width .3s ease-in-out;
  }
  &:hover:after,
  &:focus:after {
    width: 100%;
    outline: none;
}
`