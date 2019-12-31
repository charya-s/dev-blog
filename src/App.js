import React from 'react';

// LAYOUT
import { NavBar } from "./layout/NavBar.js";

// COMPONENTS
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";

import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition  } from "react-transition-group";

function App() {
  return (
    <>

      <NavBar />

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
    </>
  );
}

export default App;
