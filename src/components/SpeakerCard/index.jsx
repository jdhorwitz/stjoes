import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { ExpandUp } from 'animate-components';
import './index.css';

const SpeakerCard = ({ name, date, url }) => (
  <div className="speaker-card">
    <ExpandUp duration="1s">
      <Card color='green'>
        <Card.Content>
          <Card.Header>
            {name} - {date}
          </Card.Header>
          <Card.Description>
            {name} gives an open talk at St. Joes.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui buttons'>
            <a href={url} target="_blank"><Button basic color='green'>Listen</Button></a>
          </div>
        </Card.Content>
      </Card>
    </ExpandUp>
  </div>
);

export default SpeakerCard;