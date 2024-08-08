import React from 'react'
import Footer from "../components/CustomComponents/Footer.jsx"
import Navbar from '../Landing/Navbar.jsx';
import { Box, Text } from '@chakra-ui/react'
const Projects = () => {
    return (
        <>
            <Navbar />
            <Box w="100%" h="100vh" bg="#000">
                <Text color="#fff">Projects</Text>
                <Footer />
            </Box>
        </>
    )
}

export default Projects
