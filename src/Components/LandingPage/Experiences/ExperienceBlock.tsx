import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

type Experiences = {
  start?: string;
  end?: string;
  title?: string;
  company?: string;
  type?: string;
  stories?: string[];
};

const ExperienceBlock = ({
  start,
  end,
  title,
  company,
  type,
  stories,
}: Experiences): JSX.Element => {
  return (
    <div className="experience-block2">
      <div className="experience-timeline2">
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "black" }} />
              <TimelineConnector
                style={{ height: "230px", backgroundColor: "black" }}
              />
            </TimelineSeparator>
            <TimelineContent>{start}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "black" }} />
            </TimelineSeparator>
            <TimelineContent>{end}</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="experience-overview2">
        <div className="experience-overview-title2">
          {title}
          <div className="company-box2">
            {company}, {type}
          </div>
        </div>
      </div>

      <div className="experience-description2">
        <ul>
          {stories?.map((story) => (
            <li>{story}</li>
          ))}
        </ul>
      </div> 
    </div>
  );
};

export default ExperienceBlock;
