import React from 'react'
import { Text, Container } from "@chakra-ui/react";
import Navbar from './Navbar.jsx';
const Hero = () => {
    return (
        <Container p="0px" maxW='full' bg='#000' h="100vh">
            <Navbar/>
            
        </Container>
    )
}

export default Hero
