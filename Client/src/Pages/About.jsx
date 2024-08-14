import React from 'react'
import Footer from "../components/CustomComponents/Footer.jsx"
import Navbar from '../components/Landing/Navbar.jsx';
import { Box, Text } from '@chakra-ui/react'
import Header from '@/components/About/Header.jsx';
import AboutHero from '@/components/About/AboutHero.jsx';
const About = () => {
    return (
        <>
            <Navbar />
            <Box w="100%" h="100vh" bg="#000">
                <Header />
                <AboutHero />

            </Box>
            <Footer />
        </>
    )
}

export default About
