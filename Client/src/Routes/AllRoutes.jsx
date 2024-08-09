import { Skeleton } from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
// import Landing from "../Pages/Landing.jsx"
const Landing = lazy(() => import("../Pages/Landing.jsx"))
const Services = lazy(() => import("../Pages/Services.jsx"))
const About = lazy(() => import("../Pages/About.jsx/"))
const NoPage = lazy(() => import("../Pages/NoPage.jsx"))
const AllRoutes = () => {
    return (
        <Suspense fallback={<Skeleton></Skeleton>}>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<About />} />
                <Route path="" element={""} />
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
