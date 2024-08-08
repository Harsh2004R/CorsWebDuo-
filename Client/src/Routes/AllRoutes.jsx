import React from 'react'
import { Routes, Route } from "react-router-dom";
import NoPage from '../Pages/NoPage';
import Landing from "../Pages/Landing.jsx"
import Services from '@/Pages/Services.jsx';
import Projects from '@/Pages/Projects.jsx';
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}

export default AllRoutes
