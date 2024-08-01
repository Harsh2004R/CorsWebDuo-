import React from 'react'
import { Container } from "@chakra-ui/react";
import { MeteorDemo } from '../components/CustomComponents/MeteorDemo.jsx';
import { BorderBeamDemo } from "../components/CustomComponents/BorderBeam.jsx"
import { WordRotateDemo } from '../components/CustomComponents/WordRotate.jsx';
const Hero = () => {
    return (
        <Container
            // border="1px solid red"
            maxW='full' bg='#000' h={{base:"auto",md:"100vh"}}>

            {/* <GlobeDemo /> */}
            <MeteorDemo />
            <BorderBeamDemo />

        </Container>
    )
}

export default Hero
