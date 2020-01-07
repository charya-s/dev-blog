// MODULES
import React from "react";
import { isMobile, isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const NotFound = () => {

  return(
    <div id="not-found-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>

      <h1 className={isMobile ? "mobile-heading" : "desktop-heading"}>Sorry.</h1>
      
      <p className={`page-body page-body-${isBrowser ? "browser" : "mobile"}`} id="not-found-body">
        Couldn't find what you were looking for! (Error 404: Page Not Found)
      </p>

    </div>
  );
}