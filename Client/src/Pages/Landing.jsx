
import React from 'react'
import Hero from '../components/Landing/Hero.jsx';
import Navbar from '../components/Landing/Navbar.jsx';
import { Box } from '@chakra-ui/react';
import InstagramFeed from '../components/Landing/InstagramFeed.jsx';
import Owner from '../components/Landing/Owner.jsx';
import Footer from "../components/CustomComponents/Footer.jsx"
const Landing = () => {
  return (
    <>
      <Box w="100%" h="100vh" bg="#000"  >
        <Navbar />
        <Hero />
        <InstagramFeed />
        <Owner />
        <Footer />
      </Box>

    </>
  )
}

export default Landing
