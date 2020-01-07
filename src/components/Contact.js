// MODULES
import React from "react";
import { isMobile, isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";


export const Contact = () => {
    return(
        <div id="contact-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
            <h1 className={isMobile ? "mobile-heading" : "desktop-heading"}>Contact Me.</h1>
        </div>
    );
}