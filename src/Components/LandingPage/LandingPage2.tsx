import About from "./About/About";
import Experiences from "./Experiences/Experiences";
import Leadership from "./Leadership/Leadership";
import Projects from "./Projects/Projects";
import Navbar from "../Shared/Navbar";

const LandingPage2 = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>
        <section className="home">
          <div className="home-text-box">
            Welcome! <br />
            I'm <span className="text-green">Nathan Bernardo</span>. <br />I
            want to improve the safety and feasibility of AI.
          </div>
        </section>
        <About />
        <Experiences />
      </main>
    </>
  );
};

export default LandingPage2;
