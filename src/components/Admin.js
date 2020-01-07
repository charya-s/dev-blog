// MODULES
import React from "react";
import { isMobile, isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const Admin = () => {

  return(
    <div id="admin-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>

      <h1 className={isMobile ? "mobile-heading" : "desktop-heading"}>Hey hey.</h1>
      
      <p className="body-para-1 body-para" id="admin-para">
        You're definitely an admin. Welcome back!
      </p>

    </div>
  );
}