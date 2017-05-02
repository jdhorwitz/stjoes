import React from 'react';
import { Card, Header, Divider } from 'semantic-ui-react';
import SpeakerCard from '../SpeakerCard';
import {talks} from '../../common/talks';
import './index.css';

const Speakers = () => (
  <div>
    <Divider hidden></Divider>
    <Header as='h3' block>
      Open Talk Recordings
    </Header>
    <div className="speakers">
      <Card.Group>
        {talks.map((talk) => {
          return <SpeakerCard name={talk.name} url={talk.url} />
        })}
      </Card.Group>
    </div>
  </div>
);

export default Speakers;