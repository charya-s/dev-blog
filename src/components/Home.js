// MODULES
import React, { useState, useEffect } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import { Markup } from "interweave";

// LAYOUT
import { LoaderComponent } from "../layout/Loader.js";

// CSS
import "../Styles.css";
import "./Components.css";


export const Home = (props) => {
  const userName = props.user !== null ? (props.user.displayName + "").split(" ")[0] : "";

  const [body, setBody] =  useState("");

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    let inProgress = false;

    props.db.collection("posts").where("title", "==", "Post 1").get().then(result => {
      if (!inProgress) { setBody(result.docs[0].data().body); setLoading(false); };
    }).catch(error => console.log(error));

    return () => { inProgress = true }
  }, []);

  console.log(body);

  return(
    <div id="home-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
      <h1 className={isMobile ? "mobile-heading" : "desktop-heading"}>Heyo{props.user !== null ? ` ${userName}` : ""}. </h1>
      
      <div className={`page-body page-body-${isBrowser ? "browser" : "mobile"}`} id="home-body">
          <Markup content={body} />
          <LoaderComponent />
      </div>
    </div>
  );
}