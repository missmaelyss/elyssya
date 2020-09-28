import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNavbar from './navbar';
import Footer from './footer';
import Home from './home';
import "./index.css";
// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function MyApp() {
  return (
    <>
      {/* <MyNavbar /> */}
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/*">
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <Footer>
        <img
          src="/by.png"
          width="200"
          className="d-inline-block align-top"
          alt=""
        />
      </Footer> */}
    </>
  );
}


function Project() {
  return (
    <div className="background_project">
      <h2>Project</h2>
    </div>
  );
}

function Experience() {
  return (
    <div className="background_experience">
      <h2>Experience</h2>
    </div>
  );
}

function Contact() {
  return (
    <div className="background_contact">
      <h2>Contact</h2>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}



