import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Warranty() {
  const style = {
    anchorOffset: {
      position: 'absolute',
      top: '-3.8em',
    },
  };

  return (
    <Grid style={{ marginBottom: '2em' }} container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header as="h2" style={{ position: 'relative' }}>
          <span id="warranty" style={style.anchorOffset}></span>
          Warranty
        </Header>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={<Icon name="linkify" size="huge" />}
              size="medium"
              shape="rounded"
              src="http://placehold.it/300x300"
              href="#"
              alt="Warranty Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={<Icon name="linkify" size="huge" />}
              size="medium"
              shape="rounded"
              src="http://placehold.it/300x300"
              href="#"
              alt="Warranty Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={<Icon name="linkify" size="huge" />}
              size="medium"
              shape="rounded"
              src="http://placehold.it/300x300"
              href="#"
              alt="Warranty Placeholder"
            />
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <DimmedImage
              description={<Icon name="linkify" size="huge" />}
              size="medium"
              shape="rounded"
              src="http://placehold.it/300x300"
              href="#"
              alt="Warranty Placeholder"
            />
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

export default Warranty;
