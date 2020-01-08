import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS

// CSS
import "../Styles.css";
import "./Layout.css";


export const NavBarDesktop = (props) => { 

    return(
        <>
            <nav id={`nav-bar-desktop-${props.path==="" ? "home" : props.path}-container`} className="nav-bar-desktop-container" >
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                    {
                        props.admin > 5 ? <li><Link to="/admin">Admin</Link></li> : null
                    }

                    {
                        props.user !== null ?
                            <>  
                                <li><div className="sign-io-desktop" onClick={ () => props.signOut().then(window.location.reload()) }>Sign Out</div></li>
                                <li className="user-dp-cont"><img className="user-dp" src={props.user.photoURL} alt="user_dp"/></li>
                            </>
                        :
                            <li><div className="sign-io-desktop" onClick={ () => props.signIn() }>Sign In</div></li>
                    }
                </ul>
            </nav>
        </>
    );
}