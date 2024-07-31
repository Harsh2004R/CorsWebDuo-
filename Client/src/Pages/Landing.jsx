
import React from 'react'
import Hero from '../Landing/Hero.jsx';
import Navbar from '../Landing/Navbar.jsx';
import { Box } from '@chakra-ui/react';
const Landing = () => {
  return (
    <>
      <Navbar />
      {/* <Box w="100%" h="100vh" bg="grey"></Box> */}
      <Hero />
    </>
  )
}

export default Landing
