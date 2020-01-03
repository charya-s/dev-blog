// MODULES
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition  } from "react-transition-group";
import { BrowserView, MobileView } from "react-device-detect";

// FIREBASE
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

// LAYOUT
import { NavBarDesktop } from "./layout/NavBarDesktop.js";
import { NavBarMobile } from "./layout/NavBarMobile.js";
import { License } from "./layout/License.js";

// COMPONENTS
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";


const firebaseApp = firebase.initializeApp(firebaseConfig);
var user = {displayName: "", photoURL: ""};


class App extends Component {

  constructor() {
    super();
    this.state = { toggle: false }
  }

  render() {
    const {signOut, signInWithGoogle} = this.props;

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
                <Route path="/" component={() => <Home user={user} /> } exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}  />
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
}


const firebaseAppAuth = firebaseApp.auth();
firebase.auth().onAuthStateChanged(function(newUser) {
  if (newUser) {
    user.displayName = newUser.displayName;
    user.photoURL = newUser.photoURL;
  }
});

const providers = { googleProvider: new firebase.auth.GoogleAuthProvider(), };


export default withFirebaseAuth({
  providers, firebaseAppAuth
})(App);
