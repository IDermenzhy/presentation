import React, {useCallback, useMemo} from 'react'
import Header from '../../Blocks/Header'
import { Container } from './styles'
import {Button} from "antd";
import {Content} from "../Callback/styles";

export default ({}) => {
    const memoizedValue = useMemo(() => Math.random(), []);
    const memoized =  () => console.log(memoizedValue);
    const unMemoized = () => console.log(Math.random());
    return <Container>
        <Header />
        <Content>
            <Button onClick={memoized}>Memoized</Button>;
            <Button onClick={unMemoized}>Un-memoized</Button>;
        </Content>
    </Container>
}