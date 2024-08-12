import { SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
// import Landing from "../Pages/Landing.jsx"
const Landing = lazy(() => import("../Pages/Landing.jsx"))
const Services = lazy(() => import("../Pages/Services.jsx"))
const About = lazy(() => import("../Pages/About.jsx/"))
const NoPage = lazy(() => import("../Pages/NoPage.jsx"))
const Contact = lazy(() => import("../Pages/Contact.jsx"))
const FAQ = lazy(() => import("../Pages/FAQ.jsx"))

const AllRoutes = () => {
    return (
        <Suspense fallback={
            <Box w="100%" h="100vh" bg="#000">
                <Box padding='6' bg="#000" w="50%" h="auto" boxShadow='lg'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='5' />
                </Box>
                <Box padding='6' bg="#000" w="100%" h="auto" boxShadow='lg' >
                    <SkeletonCircle size='100px' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='7' />
                </Box>
            </Box>
        }>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="" element={""} />
                <Route path="" element={""} />
                <Route path="" element={""} />
                <Route path="" element={""} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Suspense>
    )
}

export default AllRoutes
