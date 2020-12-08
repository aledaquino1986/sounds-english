import React from "react";
import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about-us";
import Consonants from "./pages/consonants";
import Vowels from "./pages/vowels";
import Cards from "./cards";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/about-us">
            <AboutUs />
          </Route>

          <Route exact path="/vowels">
            <Vowels />
          </Route>

          <Route exact path="/consonants">
            <Consonants />
          </Route>

          <Route exact path="/Cards">
            <Cards />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
