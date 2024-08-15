import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Landing/Navbar.jsx';
import Header from '@/components/Dashboard/Header.jsx';
import Details from '@/components/Dashboard/Details.jsx';
const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Box w="100%" h="auto" bg="#000" >
                <Header />
                <Details />
            </Box>

        </>
    )
}

export default Dashboard
