import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Partners() {
  return (
    <Grid columns={1} container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">Partners</Header>
          <p>Find us at these fine retailers <Icon name="chevron right" /></p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={'Lorem ipsum.'}
                  size="medium"
                  shape="rounded"
                  src="images/ace-logo.png"
                  href="#"
                  alt="Partner Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={'Lorem ipsum.'}
                  size="medium"
                  shape="rounded"
                  src="images/canac-logo.png"
                  href="#"
                  alt="Partner Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={'Lorem ipsum.'}
                  size="medium"
                  shape="rounded"
                  src="images/canadian-tire-logo.png"
                  href="#"
                  alt="Partner Placeholder"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={'Lorem ipsum.'}
                  size="medium"
                  shape="rounded"
                  src="images/home-depot-logo.png"
                  href="#"
                  alt="Partner Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={'Lorem ipsum.'}
                  size="medium"
                  shape="rounded"
                  src="images/home-hardware-logo.png"
                  href="#"
                  alt="Partner Placeholder"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <DimmedImage
                  description={'Lorem ipsum.'}
                  size="medium"
                  shape="rounded"
                  src="images/kent-logo.png"
                  href="#"
                  alt="Partner Placeholder"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Partners;
