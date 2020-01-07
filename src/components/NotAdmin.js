// MODULES
import React from "react";
import { isMobile, isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const NotAdmin = () => {

  return(
    <div id="not-admin-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>

      <h1 className={isMobile ? "mobile-heading" : "desktop-heading"}>Yikes.</h1>
      
      <p className={`page-body page-body-${isBrowser ? "browser" : "mobile"}`} id="not-admin-body">
        You're not an admin! You'll need to be one to see what's in here. 
      </p>

    </div>
  );
}