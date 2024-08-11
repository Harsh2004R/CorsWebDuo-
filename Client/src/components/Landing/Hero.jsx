import React from 'react'
import { Container } from "@chakra-ui/react";
import { MeteorDemo } from '../CustomComponents/MeteorDemo.jsx';
import { BorderBeamDemo } from "../CustomComponents/BorderBeam.jsx"
import { WordRotateDemo } from '../CustomComponents/WordRotate.jsx';
const Hero = () => {
    return (
        <Container
            // border="1px solid red"
            maxW='full' bg='#000' h={{base:"auto",md:"100vh"}}>
            <MeteorDemo />
            <BorderBeamDemo />

        </Container>
    )
}

export default Hero
