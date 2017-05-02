import React from 'react';
import { Image, Divider,Container, Header } from 'semantic-ui-react';
import { ExpanseUp } from 'animate-components';
import AA from '../../common/aa.svg';
import './index.css';

const Home = () => (
  <div className="home-page">
    <ExpanseUp duration=".5s">
    <Image src={AA} size='medium' centered />
      <Header block as='h2' textAlign="center">
        Welcome to the Home Page for Saturday Night at St. Joes
      </Header> 
      <Divider hidden></Divider>
        <Container text textAlign="center">
          <Header as='h3'>An open meeting of Alcoholics Anonymous</Header>
          <p>Welcome!</p>
          <p>We meet every Saturday at 7:30pm in the Mcaulay Auditorium, located inside of St. Joes Hospital.</p>
          <p>Parking is available in the P lot.  Once inside follow signs for the auditorium.</p>
        </Container>
        </ExpanseUp>    
  </div>
);

export default Home;