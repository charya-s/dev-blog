// MODULES
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition  } from "react-transition-group";
import { BrowserView, MobileView } from "react-device-detect";

// LAYOUT
import { NavBarDesktop } from "./layout/NavBarDesktop.js";
import { NavBarMobile } from "./layout/NavBarMobile.js";
import { License } from "./layout/License.js";

// COMPONENTS
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";


function App() {
  return (
    <>

      <BrowserView>
        <NavBarDesktop />
      </BrowserView>

      <MobileView>
        <NavBarMobile />
      </MobileView>

      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={ location.key } timeout={500} classNames="fade">
            <Switch location={ location }>
              <Route path="/" component={Home} exact />
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

export default App;
