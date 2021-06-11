import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Statewise from "./components/Statewise";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/statewise">
          <Statewise />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
