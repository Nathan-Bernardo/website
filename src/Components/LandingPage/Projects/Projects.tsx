import { ListItem } from "@material-ui/core";
import ExperienceBlock from "../Experiences/ExperienceBlock";
import { projectData } from "./projectData";

const Projects = (): JSX.Element => {
  return (
    <div className="projects">
      Projects
      {projectData.map((item, index) => (
        <ExperienceBlock
          start={item.start}
          end={item.end}
          title={item.title}
          company={item.company}
          type={item.type}
          stories={item.projects}
        />
      ))}
    </div>
  );
};

export default Projects;
