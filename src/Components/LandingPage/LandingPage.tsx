import About from "./About/About";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";

const LandingPage = (): JSX.Element => {
  return (
    <>
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
        <Projects />
      </main>
    </>
  );
};

export default LandingPage;
