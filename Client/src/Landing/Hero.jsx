import React from 'react'
import { Text, Container, Box } from "@chakra-ui/react";
import Navbar from './Navbar.jsx';
import { GlobeDemo } from "../components/CustomComponents/GlobeDemo.jsx";
import { MeteorDemo } from '../components/CustomComponents/MeteorDemo.jsx';
const Hero = () => {
    return (
        <Container
            // border="1px solid red"
            maxW='full' bg='#000' h="1000vh">

            {/* <GlobeDemo /> */}
            <MeteorDemo />

        </Container>
    )
}

export default Hero
