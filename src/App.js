// MODULES
import React, { useState, useEffect } from 'react';                       // React.
import { Route, Switch, Redirect } from "react-router-dom";               // For routing and switching pages.
import { TransitionGroup, CSSTransition  } from "react-transition-group"; // For animations and transitions.
import { BrowserView, MobileView } from "react-device-detect";            // For checking device type.

// FIREBASE
import * as firebase from 'firebase/app'; // Firebase.
import {signInWithGoogle, signOut, firebaseDB} from './Firebase.js';  // Methods to sign in, sign out and the database.
import { ManageUsers } from "./firebase-components/ManageUsers.js";   // Adds new users to the DB. Checks if user is an admin.

// LAYOUT
import { NavBarDesktop } from "./layout/NavBarDesktop.js";  // Desktop NavBar.
import { NavBarMobile } from "./layout/NavBarMobile.js";    // Mobile NavBar.
import { License } from "./layout/License.js";              // License.

// COMPONENTS
import { NotFound } from "./components/NotFound.js";        // Error 404 Page.
import { Home } from "./components/Home.js";                // Home Page.
import { About } from "./components/About.js";              // About Page.
import { Contact } from "./components/Contact.js";          // Contact Page.
import { Admin } from "./components/Admin.js";              // Admin Page.
import { NotAdmin } from "./components/NotAdmin.js";        // Not Admin Page.



/*************************/
/***** APP COMPONENT *****/
/*************************/
const App = () => {

  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [currentPath, setCurrentPath] = useState(null);

  // Get the user data when authorization is given or removed.
  firebase.auth().onAuthStateChanged((result) => {
    setUser(result);
  });

  // If "user" changes (sign in/out), run ManageUsers and update the value of "admin" with the relevant level.
  useEffect(() => {
    ManageUsers(user, firebaseDB).then(value => setAdmin(value));
  }, [user]);

  return (
    <>
      <button onClick={ () => console.log(admin)} >TEST</button> {/* Used for doing tons of stuff.*/}

      <BrowserView>
        <NavBarDesktop user={user} signIn={signInWithGoogle} signOut={signOut} admin={admin} path={currentPath} />
      </BrowserView>

      <MobileView>
        <NavBarMobile user={user} signIn={signInWithGoogle} signOut={signOut} admin={admin} path={currentPath} />
      </MobileView>

      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={ location.key } timeout={500} classNames="fade">
            <Switch location={ location } onChange={setCurrentPath(location.pathname.split("/")[1])}>

              {/* USABLE PAGES */}
              <Route path="/" component={() => <Home user={user} db={firebaseDB} /> } exact />
              <Route path="/about" component={About} db={firebaseDB} />
              <Route path="/contact" component={Contact} db={firebaseDB} />

              {/* ADMIN PAGE */}
              <Route path="/admin" component={admin > 5 ? Admin : NotAdmin} />

              {/* 404 PAGE */}
              <Route path="/404" component={NotFound} />
              <Redirect from="*" to="/404" />

            </Switch>
          </CSSTransition>
        </TransitionGroup>      
      )} />

      <BrowserView>
        <License color={currentPath==="" ? "white" : null}/>
      </BrowserView>

    </>
  );
  
}



export default App;
