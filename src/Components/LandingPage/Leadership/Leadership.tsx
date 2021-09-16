import ExperienceBlock from "../Experiences/ExperienceBlock";

const leadership1 = [
  "Led a team of engineers to provide students opportunities to leverage their technical skills",
  "Coordinated with project coordinators in organizing PCB and deep learning workshops.",
  "Coordinated with industry correspondents connect with industries and successfully brought in professional engineers for networking events",
  "Spearheaded statewide collaboration with region 6 IEEE branches; aimed to help students gain valuable engineering skills through a virtual environment.",
  "Planned and organized machine learning workshops with community colleges.",
];

const leadership2 = [
  ""
]

const Leadership = (): JSX.Element => {
  return (
    <div className="leadership">
      Leadership
      <ExperienceBlock
        start="Mar 2020"
        end="Mar 2021"
        title="President"
        company="IEEE at UCI"
        type="full-time"
        stories={leadership1}
      />
       <ExperienceBlock
        start="July 2020"
        end="Present"
        title="President"
        company="IEEE at Students United"
        type="full-time"
        stories={leadership2}
      />
    </div>
  );
};

export default Leadership;
