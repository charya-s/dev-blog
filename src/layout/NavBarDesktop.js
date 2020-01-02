import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS


// CSS
import "../Styles.css";
import "./Layout.css";

export const NavBarDesktop = () => {
    return(
        <>
            <nav id="nav-bar-desktop-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    );
}