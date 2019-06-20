import React, {useCallback, useMemo} from 'react'
import {Button} from 'antd'
import Header from '../../Blocks/Header'
import { Container, Content } from './styles'

export default ({}) => {
    const handleClick = () => {
        console.log('Un-memoized');
    }
    const memoizedHandleClick = useCallback(
      () => console.log('Memoized'), [],
    ); // Tells React to memoize regardless of arguments.
    const doSomething = () => {
        return Math.random();
    }
    const memoizedValue = useMemo(() => Math.random(), []);
    const memoizedCallback = useCallback(() => console.log(doSomething()), []);
    const unMemoizedCallback = () => console.log(doSomething());

    return <Container>
        <Header />
        <Content>
            <Button onClick={memoizedCallback}>Memoized</Button>;
            <Button onClick={unMemoizedCallback}>Un-memoized</Button>;
        </Content>

    </Container>
}