import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Partners() {
  return (
    <Grid container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header as="h2">Partners</Header>
        <p>Find us at these fine retailers <Icon name="chevron right" /></p>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/ace-logo.svg"
              href="#"
              alt="Partner Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/canac-logo.png"
              href="#"
              alt="Partner Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/canadian-tire-logo.svg"
              href="#"
              alt="Partner Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/home-depot-logo.svg"
              href="#"
              alt="Partner Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/home-hardware-logo.png"
              href="#"
              alt="Partner Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={'Lorem ipsum.'}
              size="medium"
              shape="rounded"
              src="images/kent-logo.png"
              href="#"
              alt="Partner Placeholder"
            />
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

export default Partners;
