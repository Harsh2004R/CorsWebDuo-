import React from 'react'
import Footer from "../components/CustomComponents/Footer.jsx"
import Navbar from '../components/Landing/Navbar.jsx';
import { Box, Text } from '@chakra-ui/react'
import Form from '@/Contact/Form.jsx';
import Header from '@/Contact/Header.jsx';
const Contact = () => {
    return (
        <>
            <Navbar />
            <Box w="100%" h="auto" bg="#000">
                <Header />
                <Form />
            </Box>
            <Footer />

        </>
    )
}

export default Contact
