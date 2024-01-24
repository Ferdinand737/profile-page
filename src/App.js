import './App.css';
import Intro from './components/intro'
import Content from './components/content';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import {GitHub, LinkedIn} from '@mui/icons-material';
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
          {`Hello!, I'm Ferdinand`}
          </p>
          <p>
              {`I am a 4th year computer science student at UBC's Okanagan Campus.
              I love creating things with code, and finding ways to apply my programming skills.
              In between classes and assignments, I like working on my projects. `}
              <a href={require('./resume.pdf')} download="ferdinand-haaben-resume.pdf">
                  Download my resume
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
            <GitHub/>
          </Contact>
          <Contact 
            service='LinkedIn' 
            link='https://www.linkedin.com/in/ferdinand-haaben-a46887208/' 
            username='Ferdinand Haaben'
          >
            <LinkedIn/>
          </Contact>
        </Section>
        <Section title='Education'cols={2}>
          <Education 
            title='Bachelor of Science (Honours)'
            school='University of British Columbia'
            specialization='Major: Computer Science'
            when='2019 - 2024'
          />
          <Education 
            title='Trades Diploma'
            school='Northern Lights College'
            specialization='Aircraft Maintenance Engineering'
            when='2014 - 2016'
          />  
        </Section>
        <Section title='Experience' cols={1}>
          <Experience
              title='Network Traffic Analyst'
              employer='Plume'
              location='Remote'
              when='May, 2023 - Sep, 2023'
              details={[
                'Configured OpenWRT router with Open VPN and tcpdump',
                'Used custom commandline tools and wireshark to analyze packets',
                'Wrote "signatures" in custom programming language to uniquely identify traffic',
                'Automated company processes with python scripts'
              ]}
              skills={[
                'Git',
                'Linux',
                'Python'
              ]}
            />
          <Experience
            title='Junior Software Developer'
            employer='Ocean Networks Canada'
            location='Victoria B.C.'
            when='May, 2022 - Dec, 2022'
            details={[
              'Created and maintained UI tests with Java + Selenium',
              'Designed and implemented web-apps with React',
              'Implemented back-end services for web-apps in Java',
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
            name='Parrot Discord Bot'
            url='https://github.com/Ferdinand737/voice-clone-bot'
            description="Parrot is an interactive voice cloning bot created using ElevenLabs and OpenAi APIs. 
                          The bot takes a voice and a string as inputs, joins your voice channel and speaks the string in the chosen voice. 
                          I also created a webapp where users can see their usage and buy more characters through stripe."
            skills={[
            'MySQL',
            'Python',
            'Django'
            ]}
          />
          <Project
            name='Office Hours'
            url='https://github.com/ubco-db/office-hours'
            description='This project was done as an honours thesis at UBCO. I was involved in expanding the system to function accross multiple organizations beyond UBC.
            This involved building out several new features such as a comprehensive admin panel, invite links for courses front-end changes and more.'
            skills={[
              'TypeScript',
              'React',
              'NextJs',
              'NestJs',
              'NodeJs',
              'Yarn',
              'TailwindCSS',
              'PostgreSQL'
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
              'PostgreSQL'
            ]}
          />
          <Project
            name='TA Scheduler'
            url=''
            description='This project was done as a directed studies at UBCO. It is a system that receives applications for teaching assistants and allocates them to courses according to their qualifications and schedule.
                          I was primarily responsible for bugfixes and adding some new features.'
            skills={[
              'Laravel',
              'MySQL',
              'PHP',
              'jQuery',
              'JavaScript'
            ]}
          />
          <Project
            name='UBC Course Bot'
            url='https://github.com/Ferdinand737/UBC-Course-Bot'
            description='A discord bot that takes a course as an input and replies with
            a visualization of the pre-requisite courses.'
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
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;


  

