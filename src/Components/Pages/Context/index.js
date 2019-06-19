import React from 'react'
import Header from '../../Blocks/Header'
import { ContextProvider } from "./context"

import Child from './innerBlocks/Child'
import { Container, Content } from './styles'


export default ({}) => {
    return <ContextProvider>
        <Container>
            <Header />
            <Content>
                <Child />
            </Content>

        </Container>
    </ContextProvider>
}