// MODULES
import React from "react";
import { isMobile, isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const Home = (props) => {

  const userName = props.user !== null ? (props.user.displayName + "").split(" ")[0] : "";
  
  return(
    <div id="home-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
      <h1 className={isMobile ? "mobile-heading" : ""}>Heyo{props.user !== null ? ` ${userName}` : ""}. </h1>
    </div>
  );
}