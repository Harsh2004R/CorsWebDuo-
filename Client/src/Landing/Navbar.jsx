import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import './Navbar.scss';
const Navbar = () => {
    useEffect(() => {
        const navToggle = document.querySelector("#top-nav-toggle");

        function watchNavClose(e) {
            const topNav = document.querySelector(".top-bar");
            if (!e.path.includes(topNav)) {
                openCloseNav();
                document.documentElement.removeEventListener("click", watchNavClose);
            }
        }
        function openCloseNav() {
            const navToggle = document.querySelector("#top-nav-toggle");
            if (!navToggle.classList.contains("closed")) {
                navToggle.classList.add("closed");
                document.querySelector("#top-bar__nav").classList.remove("collapsed");
                document.querySelector("html").addEventListener("click", watchNavClose);
            } else {
                navToggle.classList.remove("closed");
                document.querySelector("#top-bar__nav").classList.add("collapsed");
                document.documentElement.removeEventListener("click", watchNavClose);
            }
        }
        navToggle.addEventListener("click", openCloseNav);

        return () => {
            navToggle.removeEventListener("click", openCloseNav);
            document.documentElement.removeEventListener("click", watchNavClose);
        };
    }, []);

    return (
        <>

            <div className="top-bar">
                <button className="top-bar__nav-toggle hamburger" id="top-nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a href="#" className="top-bar__brand">C<span style={{ color: "#78909C" }} className="auto-bounce">W</span>D</a>
                <div className="top-bar__contact">

                </div>
                <div className="top-bar__social">
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                <nav className="top-bar__nav collapsed" id="top-bar__nav">
                    <ul className="top-bar__nav-list">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar
