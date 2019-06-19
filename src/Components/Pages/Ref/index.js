import React, {useRef} from 'react'
import {Button} from 'antd'

import Header from '../../Blocks/Header'
import { Container, Content, Input } from './styles'

export default ({}) => {
    const inputRef = useRef(null);
    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputRef.current.focus();
    };
    return <Container>
        <Header />
        <Content>
            <Input ref={inputRef} type="text"/>
            <Button onClick={onButtonClick}>Установить фокус на поле ввода</Button>
        </Content>

    </Container>
}