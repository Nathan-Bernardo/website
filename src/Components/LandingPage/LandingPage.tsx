import "./styles/landing.css";
import Home from "./Home/Home";
import Indicator from "../Shared/Indicator";
import About from "./About/About";
import Experiences from "./Experiences/Experiences";

const LandingPage = (): JSX.Element => {
  return (
    <>
      <Indicator />
      <Home />
      <About />
      <Experiences />
    </>
  );
};

export default LandingPage;
