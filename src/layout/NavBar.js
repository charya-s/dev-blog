import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../Styles.css";
import "./Layout.css";

export const NavBar = () => {
    return(
        <div id="nav-bar-container">
            <ul id="top-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}