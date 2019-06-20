import React, {useCallback,  useState} from 'react'
import { Divider} from 'antd'
import Header from '../../Blocks/Header'
import Input from './input'
import { Container, Content } from './styles'

export default ({}) => {
    const [word1, setWord1] = useState('')
    const [word2, setWord2] = useState('')


    return <Container>
        <Header />
        <Content>
            <span>using hook</span>
            <Input onChange={useCallback(e => setWord1(e.target.value), [])}/>
            <p>input value {word1}</p>
            <Divider />
            <span>without hook</span>
            <Input onChange={e => setWord2(e.target.value)}/>
            <p>input value {word2}</p>
        </Content>

    </Container>
}