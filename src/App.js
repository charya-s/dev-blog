// MODULES
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition  } from "react-transition-group";
import { BrowserView, MobileView } from "react-device-detect";

// FIREBASE
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';


// LAYOUT
import { NavBarDesktop } from "./layout/NavBarDesktop.js";
import { NavBarMobile } from "./layout/NavBarMobile.js";
import { License } from "./layout/License.js";

// COMPONENTS
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";



/************************************************************************************ */
/* FIREBASE SETUP */
const firebaseApp = firebase.initializeApp(firebaseConfig);

// AUTHENTICATION
const firebaseAuth = firebaseApp.auth();

var googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => firebaseAuth.signInWithPopup(googleProvider); 

const signOut = () => firebaseAuth.signOut(); 

// CLOUDSTORE
const firebaseDB = firebaseApp.firestore();

/************************************************************************************ */



const App = () => {

  const [user, setUser] = useState(null);

  firebaseAuth.onAuthStateChanged((result) => {
    setUser(result);
  });

  return (
    <>

      <BrowserView>
        <NavBarDesktop user={user} signIn={signInWithGoogle} signOut={signOut} />
      </BrowserView>

      <MobileView>
        <NavBarMobile user={user} signIn={signInWithGoogle} signOut={signOut} />
      </MobileView>

      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={ location.key } timeout={500} classNames="fade">
            <Switch location={ location }>
              <Route path="/" component={() => <Home user={user} db={firebaseDB} /> } exact />
              <Route path="/about" component={About} db={firebaseDB} />
              <Route path="/contact" component={Contact} db={firebaseDB} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>      
      )} />

      <BrowserView>
        <License />
      </BrowserView>

    </>
  );
  
}



export default App;
