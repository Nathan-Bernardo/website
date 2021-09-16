import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage2 from "./Components/LandingPage/LandingPage2";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage2} />
    </Switch>
  );
}

export default App;
