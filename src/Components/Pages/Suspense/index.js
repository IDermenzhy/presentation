import React, {Suspense, lazy} from 'react'

import Header from '../../Blocks/Header'

import {Container, Content} from './styles'
const Text  = lazy(() => import('./innerBlocks/Avatars'))

export default ({}) => {
    return <Container>
        <Header />
        <Content>
            <Suspense fallback={<span style={{color: 'white', fontSize: 20}}>Loading ...</span>}>
                <Text />
            </Suspense>
        </Content>
    </Container>
}