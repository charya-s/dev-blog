// MODULES
import React from "react";
import { isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";


export const Contact = () => {
    return(
        <div id="contact-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
            <h1>Contact Me.</h1>
        </div>
    );
}