import './App.css';
import Intro from './components/intro'
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
      <Content title={"About Me"}>
        <Intro>
          <p>
            {`Hello, I'm Ferdinand! 👋`}
          </p>
          <p className='description'>
            {`
                I'm a Computer Science graduate with extensive experience in both front-end and back-end design and implementation. I am proficient in a variety of programming languages and the latest web frameworks. I've built full-stack applications from scratch using Node, Django, and Laravel. Additionally, I have significant experience in creating AI-enhanced applications using LLMs and working with large datasets for data analysis. My passion lies in building innovative solutions through code. I am always eager to tackle new challenges and build quality software.
              `}
          </p>
          <p>
            <a href={require('./resume.pdf')} download="ferdinand-haaben-resume.pdf">
              Download My Resume
            </a>
          </p>
        </Intro>
        <br></br>
        <Section title='Contact' cols={2}>
          <Contact
            service='GitHub'
            link='https://github.com/Ferdinand737'
            username='Ferdinand737'
          >
            <GitHub />
          </Contact>
          <Contact
            service='LinkedIn'
            link='https://www.linkedin.com/in/ferdinand-haaben-a46887208/'
            username='Ferdinand Haaben'
          >
            <LinkedIn />
          </Contact>
        </Section>
        <Section title='Education' cols={2}>
          <Education
            title='Bachelor of Science (Honours)'
            work='Thesis: Teaching With AI'
            workLink='https://open.library.ubc.ca/soa/cIRcle/collections/undergraduateresearch/52966/items/1.0443555'
            school='University of British Columbia'
            specialization='Computer Science'
            when='2019 - 2024'
          />
          <Education
            title='Trades Diploma'
            work=''
            workLink=''
            school='Northern Lights College'
            specialization='Aircraft Maintenance Engineering'
            when='2014 - 2016'
          />
        </Section>
        <Section title='Experience' cols={1}>
          <Experience
            title='Laravel Developer'
            employer='Nerd North Inc'
            location='Vernon, B.C.'
            when='July, 2024 - Present'
            details={[
              'Designed and implemented backend architecture and database schema',
              'Created a responsive front-end interface using Tailwind, Alpine.js, and Livewire.',
              'Conducted thorough testing and deployed the application to the production environment.',
              'Integrated multiple third-party APIs including Printful and Stripe for seamless operations.',
              'Managed the entire project lifecycle from requirements generation to final testing and deployment.'
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
            title='Network Traffic Analyst'
            employer='Plume'
            location='Remote'
            when='May, 2023 - Sep, 2023'
            details={[
              'Configured OpenWRT router with Open VPN and tcpdump',
              'Used custom commandline tools and wireshark to analyze packets',
              'Wrote "signatures" in custom programming language to uniquely identify traffic',
              'Automated company processes with python scripts',
              'Analyzed large datasets with pandas and spark',
            ]}
            skills={[
              'Git',
              'Linux',
              'Python',
              'Spark',
              'Pandas',
            ]}
          />
          <Experience
            title='Junior Software Developer'
            employer='Ocean Networks Canada'
            location='Victoria B.C.'
            when='May, 2022 - Dec, 2022'
            details={[
              'Created and maintained UI tests with Java + Selenium',
              'Designed and implemented front-end features with React',
              'Implemented back-end services in Java',
              'Participated in scrum meetings, code review and agile SDLC'
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
              'Postman'
            ]}
          />
        </Section>
        <Section title='Projects' cols={2}>
          <Project
            name='Office Hours'
            url='https://open.library.ubc.ca/soa/cIRcle/collections/undergraduateresearch/52966/items/1.0443555'
            description='For my honors thesis, I built an asynchronous question center that uses a RAG (Retrieval Augmented Generation) based approach to answer student questions.
                          Students are able to mark AI-generated answers as helpful or not helpful. The teaching staff can then review the not helpful answers and update the responses.
                          The system was integrated into an existing office hours queue system.'
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
            name='Parrot Discord Bot'
            url='https://github.com/Ferdinand737/voice-clone-bot'
            description="Parrot is an interactive voice cloning bot created using ElevenLabs and OpenAi APIs. 
                          The bot takes a voice and a string as inputs, joins your voice channel and speaks the string in the chosen voice.
                          Due to the high cost of the ElevenLabs API, I implemented a system to limit the number of characters a user can use.
                          I also created a web-app where users can see their usage and buy more characters through stripe."
            skills={[
              'MySQL',
              'Python',
              'Django'
            ]}
          />
          <Project
            name='Course Planner'
            url=''
            description='This project was a directed studies at UBCO. It is a system that allows students to plan their courses and visualize their progress towards graduation.'
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
            name='TA Scheduler'
            url=''
            description='This project was done as a directed studies at UBCO. It is a system that receives applications for teaching assistants and allocates them to courses according to their qualifications and schedule.'
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
            name='UBC Course Bot'
            url='https://github.com/Ferdinand737/UBC-Course-Bot'
            description='A discord bot that takes a course as an input and replies with
            a visualization of the pre-requisite courses.'
            skills={[
              'Python',
              'Selenium',
              'Pandas',
            ]}
          />
          <Project
            name='Platonix'
            url='https://platonix.app/'
            description='
              Platonix is a web-app that uses ai to generate powerpoint presentations. 
              Platonix was created by a team of 4 students at UBCO. I was responsilbe for much of the back-end logic to build the presentations. 
              I also played a major role in the architechture and deployment of the system.'
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
            name='UBC Auto Register'
            url='https://github.com/Ferdinand737/UBC-Auto-Register'
            description='A program that automatically registers the user in their desired courses at UBC
            and sends them a text upon succesfull registration.
            I created this because I did not like constantly checking for course availabiliy during registration season.'
            skills={[
              'Python',
              'Selenium'
            ]}
          />
          <Project
            name='Website'
            url='https://github.com/Ferdinand737/profile-page'
            description='You are looking at it.'
            skills={[
              'React',
              'HTML5',
              'CSS3',
              'JavaScript'
            ]}
          />
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;




