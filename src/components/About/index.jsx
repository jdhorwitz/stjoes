import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { Entrance } from 'animate-components';
import './index.css';

const About = () => (
  <div className="about-page">
    <Entrance duration="1s">
      <Divider hidden></Divider>
        <Container text textAlign="center" className="about-page">
          <Header as='h2'>About Saturday Night at St. Joes</Header>
          <p>Saturday night at St. Joes is an open meeting of Alcoholics Anonymous that meets in Ann Arbor, MI in the auditorium of St. Joseph's hospital.</p>
          <p>All are welcome to attend.  Whether you are researching a class project, curious as to what happens at an AA meeting, or yourself can't stop drinking on your own, please come and see us.</p>
          <p>Our meeting format is an open talk given by a single speaker each week.  Typically a person who has a year or more of continous sobriety shares what it was like, what hapenned and what it's like now.</p>
          <p>Upon arrival, if you have any questions please ask at the literature table at the front of the meeting.</p>
          <p>There is also a speaker system set up in the case you would like to bring children, you can sit and listen to the meeting in the lobby and still hear the message.</p>
        </Container>
    </Entrance>
  </div>
);

export default About;