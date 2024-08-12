import React from 'react'
import Footer from "../components/CustomComponents/Footer.jsx"
import Navbar from '../components/Landing/Navbar.jsx';
import { Box, Text } from '@chakra-ui/react'
import ServicesHero from '@/components/ServicesComponents/ServicesHero.jsx';
import Details from '@/components/ServicesComponents/Details.jsx';
import Techs from '@/components/ServicesComponents/Techs.jsx';
const Services = () => {
    return (
        <>
            <Navbar />
            <Box w="100%" h="100vh" bg="#000">

                <ServicesHero />
                <Details />
                <Techs />

            </Box>

            <Footer />

        </>
    )
}

export default Services
