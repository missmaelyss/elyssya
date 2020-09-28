import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNavbar from './navbar';
import Footer from './footer';

// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function MyApp() {
  return (
    <>
      <MyNavbar />
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
      <Footer>
        Made with React
      </Footer>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Project() {
  return (
    <div>
      <h2>Project</h2>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
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



