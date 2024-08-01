import React from 'react'
import { Text, Container, Box } from "@chakra-ui/react";
import Navbar from './Navbar.jsx';
import { MeteorDemo } from '../components/CustomComponents/MeteorDemo.jsx';
import {BorderBeamDemo} from "../components/CustomComponents/BorderBeam.jsx"
const Hero = () => {
    return (
        <Container
            // border="1px solid red"
            maxW='full' bg='#000' h="1000vh">

            {/* <GlobeDemo /> */}
            <MeteorDemo />
            <BorderBeamDemo />

        </Container>
    )
}

export default Hero
