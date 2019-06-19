import React from 'react'
import {Typography, Divider} from 'antd'

import ChildOfChild from './ChildOfChild'
import {useTestContext} from "../context";

import {TextContainer} from "../styles";

const { Title } = Typography

export default () => {
  const {keyword} = useTestContext()
  return <Typography>
    <Title  style={{color: 'white'}} >Child</Title>
    <ChildOfChild />
    <Divider />
    <Title  style={{color: 'white'}}>Child of Child</Title>
    <TextContainer><p>{keyword}</p></TextContainer>
    </Typography>

}