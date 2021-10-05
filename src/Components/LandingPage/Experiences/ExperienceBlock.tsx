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
    <div className="experience-block grid grid--2-cols">
      <div className="experience-info grid grid--2-cols2">
        <div className="experience-timeline">
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
        <div className="experience-overview">
          <div className="experience-job-title">
            {title}
            <div className="company-box">
              {company}, {type}
            </div>
          </div>
        </div>
      </div>
      <div className="experience-description">
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
