import React, {useEffect, useState} from 'react'

import Header from '../../Blocks/Header'
import oh from '../../../Assets/maxresdefault.jpg'

import { Container, H1, Image } from './styles'

export default ({}) => {
    const [isVisible, setVisibility] = useState(false)


    useEffect(() => {
        const buttonElement = document.getElementById('h1')
        buttonElement.addEventListener('mouseenter', (event) =>  {
            setVisibility(true)
        });
        buttonElement.addEventListener('mouseout', (event) =>  {
            setVisibility(false)
        });
        return () => {
            buttonElement.removeEventListener('mouseenter', (event) =>  {
                setVisibility(true)
            });
            buttonElement.removeEventListener('mouseout', (event) =>  {
                setVisibility(false)
            });
        }
    }, [])

    return <Container>
        <Header />

        <H1 id={'h1'}>useEffect</H1>
        <Image src={oh} visible={isVisible}/>
    </Container>
}