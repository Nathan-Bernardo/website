import ExperienceBlock from "../Experiences/ExperienceBlock";

const project1 = [
  "Led a team of four engineers in the development of the power and control system to conform to SpaceX rules.",
  "Worked with mechanical subsystem leads to define the vehicle's energy storage system.",
  "Ensured electronics are powering required components for braking and propelling, and data is being transmitted/received through Raspberry Pi and sensors.",
  "Worked with high voltage power systems and lithium-ion battery packs to power two motors.",
  "Worked with low voltage power systems to power devices used for communication between sensors, actuators, and more.",
  "Designed a PCB with Altium to improve low-voltage system wiring for integrated circuits and communication between microcontrollers, sensors, and actuators involved.",
  "Guaranteed voltage protection in high voltage systems with DC contactors and relays.",
  "Analyzed and maintained the health of our lithium-ion battery packs with an Orion BMS.",
];

const Projects = (): JSX.Element => {
  return (
    <div className="projects">
      Projects
      <ExperienceBlock
        start="Mar 2020"
        end="Mar 2021"
        title="Systems Engineer and Power Systems Engineer"
        company="Hyperxite"
        type="full-time"
        stories={project1}
      />
    </div>
  );
};

export default Projects;
