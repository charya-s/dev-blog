// MODULES
import React from "react";
import { isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const About = () => {
    return(
        <div id="about-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
            <h1>About Me.</h1>
        </div>
    );
}