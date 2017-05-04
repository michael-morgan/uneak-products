import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Events() {
  return (
    <Grid container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header as="h2">Events</Header>
        <p>Visit us during these upcoming shows <Icon name="chevron right" /></p>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/igc-event.png"
              href="#"
              alt="Event Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/national-hardware-event.png"
              href="#"
              alt="Event Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/home-hardware-event.png"
              href="#"
              alt="Event Placeholder"
            />
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

export default Events;
