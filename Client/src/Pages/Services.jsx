import React from 'react'
import Footer from "../components/CustomComponents/Footer.jsx"
import Navbar from '../components/Landing/Navbar.jsx';
import { Box, Text } from '@chakra-ui/react'
import ServicesHero from '@/components/ServicesComponents/ServicesHero.jsx';
const Services = () => {
    return (
        <>
            <Navbar />
            <Box w="100%" h="100vh" bg="#000">

                <ServicesHero />

            </Box>

            <Footer />

        </>
    )
}

export default Services
