import About2 from "./About/About2";
import Experiences2 from "./Experiences/Experiences2";
import Leadership from "./Leadership/Leadership";
import Projects from "./Projects/Projects";
import "./styles/landing2.css";

const LandingPage2 = (): JSX.Element => {
  return (
    <div className="template">
      <div className="home2">
        <div className="home-text">
          Welcome! <br />
          I'm <span className="text-green">Nathan Bernardo</span>. <br />I want
          to improve the safety and feasibility of AI.
        </div>
      </div>
      <About2 />
      <Experiences2 />
      <Projects />
      <Leadership />
    </div>
  );
};

export default LandingPage2;
