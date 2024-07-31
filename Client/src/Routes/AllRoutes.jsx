import React from 'react'
import { Routes, Route } from "react-router-dom";
import NoPage from '../Pages/NoPage';
import Landing from "../Pages/Landing.jsx"
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="" element={""} />
            <Route path="" element={""} />
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
