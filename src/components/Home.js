// MODULES
import React, { useState, useEffect } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import { Loader } from "semantic-ui-react";
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

    props.db.collection("posts").where("title", "==", "Home Page").get().then(result => {
      if (!inProgress) { setBody(result.docs[0].data().body); setLoading(false); };
    }).catch(error => console.log(error));

    return () => { inProgress = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div id={`home-page-container-${isBrowser ? "desktop" : "mobile"}`} className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
      { loading ?
        <Loader active={true} />
      :
        <div className = {`home-page-loaded-${!loading}`} >
          <h1 className={`${isMobile ? "mobile" : "desktop"}-heading`}>Heyo{props.user !== null ? ` ${userName}` : ""}! </h1>
          
          <div className={`page-body page-body-${isBrowser ? "browser" : "mobile"}`} id="home-body">
              <h2>I'm Charya.</h2>
          </div>
        </div>
      }
    </div>
  );
}