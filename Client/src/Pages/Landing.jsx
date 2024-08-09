
import React from 'react'
import Hero from '../Landing/Hero.jsx';
import Navbar from '../Landing/Navbar.jsx';
import { Box } from '@chakra-ui/react';
import InstagramFeed from '../Landing/InstagramFeed.jsx';
import Owner from '../Landing/Owner.jsx';
import Footer from "../components/CustomComponents/Footer.jsx"
const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InstagramFeed />
      <Owner />
      <Footer />
    </>
  )
}

export default Landing
