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
          {`Greetings!, I'm Ferdinand`}
          </p>
          <p>
          {`I am a 4th year computer science student at UBC's Okanagan Campus.
           I love creating things with code, and finding ways to apply my programming skills.
           If I am not working on an assignemt for a class or studying, I am usually working on a little project.`}
          </p>
        </Intro>
        <br></br>
      <Section title='Contact' cols={2}>
        <Contact service='GitHub' link='https://github.com/Ferdinand737' username='Ferdinand737'>
          <GitHub/>
        </Contact>
        <Contact service='LinkedIn' link='https://www.linkedin.com/in/ferdinand-haaben-a46887208/' username='Ferdinand Haaben'>
          <LinkedIn/>
        </Contact>
      </Section>
      <Section title='Education'cols={2}>
        <Education 
        title='Bachelor of Science'
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
            'HTML',
            'CSS',
            'Javascript',
            'Typescript',
            'PostgreSQL',
            'Git'
          ]}
          />
        <></>
      </Section>
      <Section title='Projects' cols={2}>
          <Project
          name='UBC Course Bot'
          url='https://github.com/Ferdinand737/UBC-Course-Bot'
          description='A discord bot that takes a course as an input and replies with
          a visualization of the pre-requisite courses.'
          skills={[
            'Python',
            'Discord',
            'Selenium'
          ]}
         />
        <Project
          name='Website'
          url='https://github.com/Ferdinand737/profile-page'
          description='You are looking at it.'
          skills={[
            'React',
            'HTML',
            'CSS',
            'Javascript'
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
         name='COSC 304 Group Project'
         url='https://github.com/Ferdinand737/COSC304-GroupProject'
         description='This was the main project for my databases course. We created a simple shopping 
         website with accounts, shopping cart, admin panel, and a database to store everything.'
         skills={[
          'Java',
          'MySQL',
          'Docker'
         ]}
         />
         <Project
         name='Codingame Bot'
         url='https://github.com/Ferdinand737/Codingame-Broomstick-Flyers-Bot'
         description='I got really into Codingame a while back and created this bot for the "Broomstick-flyers" game.'
         skills={[
          'Java'
         ]}
         /> 
         <Project
         name='COSC 310 Project'
         url='https://github.com/Ferdinand737/COSC310-Individual-Project'
         description="In this project my group and I created a simple Chat Bot. The bot has a simple GUI and made use of google places and Wikpedia API's, as well as Stanford NLP libraries"
         skills={[
          'Java'
         ]}
         />
      </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;


  

