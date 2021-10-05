import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
