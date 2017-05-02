import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Entrance } from 'animate-components';
import './index.css';

const SpeakerCard = ({ name, url }) => (
  <div className="speaker-card">
    <Entrance duration="2s">
      <Card color='green'>
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Description>
            {name} gives an open talk at Saturday Night at St. Joes.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui buttons'>
            <a href={url} target="_blank"><Button basic color='green'>Listen</Button></a>
          </div>
        </Card.Content>
      </Card>
    </Entrance>
  </div>
);

export default SpeakerCard;