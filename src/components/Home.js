// MODULES
import React from "react";
import { isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const Home = (user) => {

  const userName = user.user.displayName.split(" ")[0];

  return(
    <div id="home-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
      <h1 style={!isBrowser ? {fontSize: "200%"} : {}} >Heyo{userName ? ` ${userName}` : ""}.</h1>
    </div>
  );
}