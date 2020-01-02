// MODULES
import React from "react";
import { isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const Home = () => {
    return(
      <div id="home-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
        <h1>Heyo.</h1>
      </div>
    );
  }