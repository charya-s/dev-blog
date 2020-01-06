// MODULES
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

// COMPONENTS
import { License } from "./License.js";

// CSS
import "../Styles.css";
import "./Layout.css";

export const NavBarMobile = (props) => {

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
                        {
                        props.user !== null ?
                            <>  
                                <li><div className="sign-io-mobile" onClick={ () => props.signOut().then(() => {window.location.reload(); setDrawer(false);}) }>Sign Out</div></li>
                            </>
                        :
                            <li><div className="sign-io-mobile" onClick={ () => {props.signIn(); setDrawer(false)} }>Sign In</div></li>
                        }
                    </ul>
                </nav>
                <License />
            </div>
        </div>     
    );
}