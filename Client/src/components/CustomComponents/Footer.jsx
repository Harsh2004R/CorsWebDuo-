import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ToggleFooterNav = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    // Determine the current page and the previous/next pages
    const currentPage = window.location.pathname; // Get the current URL path
    const pages = ["/", "/services", "/projects", "/faq"];
    const currentIndex = pages.indexOf(currentPage);

    const handleToggle = () => {
        setIsActive(!isActive);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            navigate(pages[currentIndex - 1]);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < pages.length - 1) {
            navigate(pages[currentIndex + 1]);
        }
    };

    return (
        <nav className={`pagination-toggle-container ${isActive ? "active" : ""}`}>
            <div id="toggle-text" className="toggle-pagination" onClick={handleToggle}>
                {isActive ? "☰ Footer" : "✘ Close"}
            </div>
            <div className="pagination">
                <a

                    className={`nav-link nav-link-prev ${currentIndex === 0 ? "disabled" : ""}`}
                    onClick={handlePrevClick}
                    style={currentIndex === 0 ? { pointerEvents: "none", opacity: 0.5 } : {}}
                >
                    <div className="nav-link-inner nav-link-inner-prev">
                        <svg className="large-arrow large-arrow-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 15">
                            <g className="large-arrow-group">
                                <polyline
                                    id="large-arrow-head"
                                    points="7.5 13.5 1.5 7.5 7.5 1.5"
                                    fill="none"
                                    stroke="white"
                                    strokeMiterlimit="10"
                                />
                                <rect className="large-arrow-body" x="1" y="7" width="68" height="1" fill="white" />
                            </g>
                        </svg>
                        <span className="pagination-text">Prev</span>
                    </div>
                </a>
                <div className="footer-links">
                    <div className="footer-item">  <FaGithub size={25} /></div>
                    <div className="footer-item"> <FaLinkedin size={25} /></div>
                    <div className="footer-item">  <FaInstagram size={25} /></div>
                </div>
                <a

                    className={`nav-link nav-link-next ${currentIndex === pages.length - 1 ? "disabled" : ""}`}
                    onClick={handleNextClick}
                    style={currentIndex === pages.length - 1 ? { pointerEvents: "none", opacity: 0.5 } : {}}
                >
                    <div className="nav-link-inner nav-link-inner-next">
                        <span className="pagination-text">Next</span>
                        <svg className="large-arrow large-arrow-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 15">
                            <g className="large-arrow-group">
                                <polyline
                                    id="large-arrow-head"
                                    points="63.5 1.5 69.5 7.5 63.5 13.5"
                                    fill="none"
                                    stroke="white"
                                    strokeMiterlimit="10"
                                />
                                <rect className="large-arrow-body" x="1" y="7" width="68" height="1" fill="white" />
                            </g>
                        </svg>
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default ToggleFooterNav;
