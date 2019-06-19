import React, {useState} from 'react'
import { Button } from 'antd'

import Header from '../../Blocks/Header'

import { Container, Content } from './styles'

export default ({}) => {
    const [num, setNum] = useState(0)

    const handleIncrement = () => {
        setNum(x => x + 1)
    }

    const handleDecrement = () => {
        setNum(x => x > 0 ? x -1 : 0)
    }

    return <Container>
        <Header />

        <Content>
            <Button type="primary" shape="circle" icon="minus"  onClick={handleDecrement}/>
            <span style={{fontSize: 20, margin: '0 10px', color: '#a1a1a1'}} >{num}</span>
            <Button type="primary" shape="circle" icon="plus"  onClick={handleIncrement}/>

        </Content>
    </Container>
}