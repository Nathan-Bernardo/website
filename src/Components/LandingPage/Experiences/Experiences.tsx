import ExperienceBlock from "./ExperienceBlock";
import { experienceData } from "./experienceData";

const Experiences = (): JSX.Element => {
  return (
    <section className="experiences">
      Experiences
      {experienceData.map((item, index) => (
        <ExperienceBlock
          start={item.start}
          end={item.end}
          title={item.title}
          company={item.company}
          type={item.type}
          stories={item.stories}
        />
      ))}
    </section>
  );
};

export default Experiences;
