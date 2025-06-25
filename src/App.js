import './App.css';
import Intro from './components/intro';
import Content from './components/content';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Section from './components/section';
import Education from './components/education';
import Contact from './components/contact';
import Experience from './components/experience';
import Project from './components/project';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Content title={'About Me'}>
        <Intro>
          <p>{`Hello, I'm Ferdinand! 👋`}</p>
          <p className="description">
            {`
                I'm a Computer Science graduate with extensive experience in both front-end and back-end design and implementation. I am proficient in a variety of programming languages and the latest web frameworks. I've built full-stack applications from scratch using Node, Django, and Laravel. Additionally, I have significant experience in creating AI-enhanced applications using LLMs and working with large datasets for data analysis. My passion lies in building innovative solutions through code. I am always eager to tackle new challenges and build quality software.
              `}
          </p>
          <p>
            <a
              href={require('./resume.pdf')}
              download="ferdinand-haaben-resume.pdf"
            >
              Download My Resume
            </a>
          </p>
        </Intro>
        <br></br>
        <Section title="Contact" cols={2}>
          <Contact
            service="GitHub"
            link="https://github.com/Ferdinand737"
            username="Ferdinand737"
          >
            <GitHub />
          </Contact>
          <Contact
            service="LinkedIn"
            link="https://www.linkedin.com/in/ferdinand-haaben-a46887208/"
            username="Ferdinand Haaben"
          >
            <LinkedIn />
          </Contact>
        </Section>
        <Section title="Education" cols={2}>
          <Education
            title="Bachelor of Science (Honours)"
            work="Thesis: Teaching With AI"
            workLink="https://open.library.ubc.ca/soa/cIRcle/collections/undergraduateresearch/52966/items/1.0443555"
            school="University of British Columbia"
            specialization="Computer Science"
            when="2019 - 2024"
          />
          <Education
            title="Trades Diploma"
            work=""
            workLink=""
            school="Northern Lights College"
            specialization="Aircraft Maintenance Engineering"
            when="2014 - 2016"
          />
        </Section>
        <Section title="Experience" cols={1}>
          <Experience
            title="CTO and Full Stack Developer"
            employer="Virtulynx"
            location="Kelowna, B.C."
            when="2024 - 2025"
            details={[
              'Spearheaded the end-to-end development of a SaaS platform for small car dealerships to automate and streamline used vehicle listings across multiple online marketplaces',
              'Built and deployed a full-stack web application using Next.js, integrating Stripe for payments and Marketcheck API for dynamic vehicle data aggregation via VIN lookup.',
              'Designed and implemented a robust backend architecture, including a flexible database schema and server logic to support user management, vehicle listings, and subscription billing.',
              'Created a clean, intuitive front-end interface from scratch, incorporating AI-generated vehicle descriptions using OpenAI integration to improve listing quality.',
              'Established CI/CD pipeline using GitHub Actions and managed production deployment with DigitalOcean, ensuring seamless updates and rapid iteration.',
            ]}
            skills={[
              'NextJs',
              'NodeJs',
              'React',
              'TypeScript',
              'PostgreSQL',
              'Docker',
            ]}
          />

          <Experience
            title="Laravel Developer"
            employer="swagfan.com"
            location="Vernon, B.C."
            when="2024"
            details={[
              'Built and launched a full-featured Laravel-based swag fulfillment platform (SwagFan), enabling users to create redeemable product links using Printful integration',
              'Designed and implemented the backend architecture, relational database schema, user management system, and business logic to support customizable giveaways.',
              'Developed a responsive front-end using Tailwind CSS, Alpine.js, and Laravel Livewire for real-time interactivity and seamless user experience.',
              'Integrated Stripe for user subscription billing, Printful for on-demand product fulfillment, and Twilio for 2FA verification using SMS to reduce fraudulent redemptions.',
              'Engineered robust functionality for swag redemption flow including inventory limits, size selection, address collection, and analytics dashboard for tracking costs and link activity.',
              'Delivered project independently from requirements gathering to production deployment, resulting in a live, revenue-generating product with active users.',
            ]}
            skills={[
              'Laravel',
              'PHP',
              'TailwindCSS',
              'AlpineJs',
              'Livewire',
              'Linux',
              'MySQL',
            ]}
          />
          <Experience
            title="Network Traffic Analyst"
            employer="Plume"
            location="Remote"
            when="2023"
            details={[
              'Engineered traffic “signatures” in a custom detection language for a C-based embedded engine, enabling accurate identification of popular applications across diverse devices.',
              'Captured and analyzed network packet data by configuring OpenWRT routers with OpenVPN and tcpdump, simulating real-world device traffic for signature development.',
              'Leveraged custom command-line tools, Python, and Wireshark to extract packet-level patterns and domain fingerprints required to distinguish difficult-to-classify services.',
              'Developed Python scripts to auto-generate traffic signature code from captured data, significantly reducing manual workload and accelerating signature deployment.',
              'Conducted big data analysis with PySpark on Databricks notebooks to identify behavioral patterns of WiFi extender devices and map associated child devices using real-world mesh network datasets.',
            ]}
            skills={['Git', 'Linux', 'Python', 'Spark', 'Pandas']}
          />
          <Experience
            title="Junior Software Developer"
            employer="Ocean Networks Canada"
            location="Victoria B.C."
            when="May, 2022 - Dec, 2022"
            details={[
              'Developed a modular Selenium UI test framework in Java to validate a React-based oceanographic data platform, streamlining test creation through reusable components and XPATH selectors.',
              'Collaborated with a senior developer to build a full-stack internal CSV ingestion tool, contributing both front-end (React) components and back-end (Java, OSGi) data processing logic.',
              'Participated in agile ceremonies within a 5-person feature team, including daily scrum meetings and peer code reviews, as part of a 30-person software department.',
              'Maintained rigorous test coverage across new and existing codebases, writing both unit and integration tests for Java services and React components.',
              'Gained hands-on experience in ocean data systems, contributing to infrastructure that supports research on hydrophones, underwater cameras, and sensor buoys.',
            ]}
            skills={[
              'React',
              'Java',
              'Selenium',
              'HTML5',
              'CSS3',
              'JavaScript',
              'TypeScript',
              'PostgreSQL',
              'Git',
              'Jira',
              'Confluence',
              'Bitbucket',
              'Jenkins',
              'Postman',
            ]}
          />
        </Section>
        <Section title="Projects" cols={2}>
          <Project
            name="Office Hours"
            url="https://open.library.ubc.ca/soa/cIRcle/collections/undergraduateresearch/52966/items/1.0443555"
            description="For my honors thesis, I built an asynchronous question center that uses a RAG (Retrieval Augmented Generation) based approach to answer student questions.
                          Students are able to mark AI-generated answers as helpful or not helpful. The teaching staff can then review the not helpful answers and update the responses.
                          The system was integrated into an existing office hours queue system."
            skills={[
              'TypeScript',
              'React',
              'NextJs',
              'NestJs',
              'NodeJs',
              'Yarn',
              'TailwindCSS',
              'PostgreSQL',
              'Docker',
            ]}
          />
          <Project
            name="Parrot Discord Bot"
            url="https://github.com/Ferdinand737/voice-clone-bot"
            description="Parrot is an interactive voice cloning bot created using ElevenLabs and OpenAi APIs. 
                          The bot takes a voice and a string as inputs, joins your voice channel and speaks the string in the chosen voice.
                          Due to the high cost of the ElevenLabs API, I implemented a system to limit the number of characters a user can use.
                          I also created a web-app where users can see their usage and buy more characters through stripe."
            skills={['MySQL', 'Python', 'Django']}
          />
          <Project
            name="Course Planner"
            url=""
            description="This project was a directed studies at UBCO. It is a system that allows students to plan their courses and visualize their progress towards graduation."
            skills={[
              'TypeScript',
              'React',
              'Remix',
              'NodeJs',
              'PostgreSQL',
              'TailwindCSS',
              'Docker',
            ]}
          />
          <Project
            name="TA Scheduler"
            url=""
            description="This project was done as a directed studies at UBCO. It is a system that receives applications for teaching assistants and allocates them to courses according to their qualifications and schedule."
            skills={[
              'Laravel',
              'MySQL',
              'PHP',
              'Jquery',
              'JavaScript',
              'Bootstrap',
            ]}
          />
          <Project
            name="UBC Course Bot"
            url="https://github.com/Ferdinand737/UBC-Course-Bot"
            description="A discord bot that takes a course as an input and replies with
            a visualization of the pre-requisite courses."
            skills={['Python', 'Selenium', 'Pandas']}
          />
          <Project
            name="Platonix"
            url=""
            description="
              Platonix is a web-app that uses ai to generate powerpoint presentations. 
              Platonix was created by a team of 4 students at UBCO. I was responsilbe for much of the back-end logic to build the presentations. 
              I also played a major role in the architechture and deployment of the system."
            skills={[
              'Python',
              'Django',
              'Bootstrap',
              'HTML5',
              'CSS3',
              'JavaScript',
              'Jquery',
              'PostgreSQL',
              'Docker',
            ]}
          />
          <Project
            name="UBC Auto Register"
            url="https://github.com/Ferdinand737/UBC-Auto-Register"
            description="A program that automatically registers the user in their desired courses at UBC
            and sends them a text upon succesfull registration.
            I created this because I did not like constantly checking for course availabiliy during registration season."
            skills={['Python', 'Selenium']}
          />
          <Project
            name="Website"
            url="https://github.com/Ferdinand737/profile-page"
            description="You are looking at it."
            skills={['React', 'HTML5', 'CSS3', 'JavaScript']}
          />
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;
