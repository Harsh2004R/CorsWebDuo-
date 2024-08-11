
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
      <Navbar />
      <Hero />
      <InstagramFeed />
      <Owner />
      <Footer />
    </>
  )
}

export default Landing
