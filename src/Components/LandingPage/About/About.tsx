const About = (): JSX.Element => {
  return (
    <>
      <section className="about">
        About
        <div className="about-block">
          <div className="about-text-block">
            I graduated at{" "}
            <span className="text-green">University of California, Irvine</span>{" "}
            with a B.S. degree in Electrical Engineering. I specialized in
            Digital Signal Processing because I love math, but particulary
            because of Machine Learning. I grew a passion in Reinforcement
            Learning because of the potential in making AI applications safe and
            modeling the human brain.
          </div>
        </div>
        <div className="about-block">
          <div className="about-text-block">
          Though this website displays my portfolio/resume, I’m also making this
          a platform to educate people (both technical and nontechnical) on a
          range of topics such as battery technology, autonomous vehicles, and
          reinforcement learning algorithms. I hope this platform will serve you
          well.
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
