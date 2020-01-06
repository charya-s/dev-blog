// MODULES
import React from "react";
import { isMobile, isBrowser } from "react-device-detect";

// CSS
import "../Styles.css";
import "./Components.css";

export const Home = (props) => {

  const userName = props.user !== null ? (props.user.displayName + "").split(" ")[0] : "";

  var posts = props.db.collection("posts");
  
  var test = "";
  
  posts.where("title", "==", "Post 1").get().then(data => console.log(data));

  console.log(test);

  return(
    <div id="home-page-container" className={`page-container page-container-${isBrowser ? "browser" : "mobile"}`}>
      <h1 className={isMobile ? "mobile-heading" : ""}>Heyo{props.user !== null ? ` ${userName}` : ""}. </h1>
      
      <p>
        {
          
        }
      </p>
    </div>
  );
}