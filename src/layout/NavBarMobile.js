// MODULES
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

// COMPONENTS
import { License } from "./License.js";

// CSS
import "../Styles.css";
import "./Layout.css";

export const NavBarMobile = () => {

    const [drawer, setDrawer] = useState(false);

    return(
        <div id="nav-bar-mobile-container">
            <input type="checkbox" name="drawer-toggle" id="drawer-toggle" checked={drawer} readOnly></input>
            <label htmlFor="drawer-toggle" id="drawer-toggle-label">
                <FiMenu id="drawer-icon" onClick={() => setDrawer(!drawer)} />
            </label>
            
            <div id="nav-bar-mobile-inner-container">
                <nav>
                    <ul>
                        <li><Link to="/" onClick={() => setDrawer(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setDrawer(false)}>About</Link></li>
                        <li><Link to="/contact" onClick={() => setDrawer(false)}>Contact</Link></li>
                    </ul>
                </nav>
                <License />
            </div>
        </div>     
    );
}