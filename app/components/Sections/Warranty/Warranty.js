import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Warranty() {
  return (
    <Grid columns={1} style={{ marginBottom: '2em' }} container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">Warranty</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="http://placehold.it/300x300"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="http://placehold.it/300x300"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="http://placehold.it/300x300"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="http://placehold.it/300x300"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Warranty;
