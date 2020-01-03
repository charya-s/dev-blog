import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS


// CSS
import "../Styles.css";
import "./Layout.css";

export const NavBarDesktop = (props) => {

    return(
        <>
            <nav id="nav-bar-desktop-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {
                        props.user.displayName !== "" ?
                            <>  
                                <li><div className="sign-io-desktop" onClick={ () => props.signOut().then(window.location.reload()) }>Sign Out</div></li>
                            </>
                        :
                            <li><div className="sign-io-desktop" onClick={ props.signIn }>Sign In</div></li>
                    }
                </ul>
            </nav>
        </>
    );
}