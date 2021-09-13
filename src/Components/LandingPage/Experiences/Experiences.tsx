import ExperienceBlock from "./ExperienceBlock";

const stories1 = [
  "Successfully built a custom named entity recognition pipeline with spaCy to automate parsing of resumes for profile creation. Combined pipeline with Emsi Skill API to extract skills and provide to HR a description of each skill.",
  "Designed the fullstack framework for automatic account creation using FastAPI, React, and MongoDB.",
  "Used Redux architecture and Immutable.js with React to manage the state of our UI components.",
  "Migrated to Typescript to improve readability and debugging in the codebase.",
  "Used Fetch API and Axios to store resume data into Redux, improving data accessibility for UI components.",
  "Improved performance of web application by memoizing the code with React hooks.",
  "Used Scrum Agile Methodology in my work with the addition of Jira for sprint backlog.",
];

const stories2 = [
  "Built a visual analytics dashboard displaying stakeholder's datasets using D3.js-based React libraries.",
  "Developed a microfrontend architecture with Single SPA to easily manage individual applications and improve initial loading time.  Provide developers the flexibility to use multiple frameworks for each microfrontend.",
  "Implemented backend with Django and RESTful API to stream data to the frontend for dynamic data visualizations.",
  "Enhanced UX by building a custom settings menu for each data visualization, allowing users to manipulate the datasets.",
  "Optimized tabular data rendering with React-Windows, reducing number of elements that get rendered in the DOM.",
  "Integrated Redux architecture into our web application to manage the state of our components.",
  "Provided design direction and iterated with CEO and quality reps to create beautifully functional experiences.",
  "Debugged application with Lighthouse and React DevTools to improve quality and performance for each page.",
];

const stories3 = [
  "Revamp the neural network controller to achieve safe training using proximal policy optimization.",
  "Apply policy-gradient algorithms to guarantee safety during the learning and execution phase.",
  "Integrated methods in OpenAI’s Safety Gym simulator for performance measure and debugging.",
  "Researched variants of policy gradient algorithms such as PPO, TRPO, DDPG  with constraints and their application to safety reinforcement learning."
]

const Experiences = (): JSX.Element => {
  return (
    <div className="experiences">
      Experiences
      <ExperienceBlock
        start="Mar 2021"
        end="Sept 2021"
        title="Software Development Engineer"
        company="Listee"
        type="full-time"
        stories={stories1}
      />
      <ExperienceBlock
        start="May 2021"
        end="Aug 2021"
        title="Software Development Engineer, Intern"
        company="Zecstra"
        type="full-time"
        stories={stories2}
      />
      <ExperienceBlock
        start="Sept 2020"
        end="Present"
        title="RL Research Assistant"
        company="Resilient Cyber-Physical Systems"
        type="full-time"
        stories={stories3}
      />
    </div>
  );
};

export default Experiences;
