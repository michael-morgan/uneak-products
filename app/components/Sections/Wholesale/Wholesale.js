import React from 'react';
import { Grid, Header, Icon, Card } from 'semantic-ui-react';

function Wholesale() {
  const style = {
    grid: {
      marginBottom: '50px',
    },
  };
  return (
    <Grid style={style.grid} container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header as="h2">Wholesale</Header>
        <p>Connect with our wholesale team <Icon name="chevron right" /></p>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <p>
          {`For information on our wholesale capabilities or to request
          wholesale product flyers & order forms for any of our brands
          please contact our Sales Associate`}
        </p>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <Card fluid raised>
          <Card.Content>
            <Card.Header>Aleisha Gregory</Card.Header>
            <Card.Meta>Sales, Marketing & Logistics</Card.Meta>
            <Card.Description>
              <Grid>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                  <span>Uneak Products</span><br />
                  <span>20 Columbus Street</span><br />
                  <span>Perth-Andover, NB E7H 1T3</span>
                </Grid.Column>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                  <span><Icon name="phone" /> 1-506-273-9492</span><br />
                  <span><Icon name="phone" /> 1-800-666-4911</span><br />
                  <span><Icon name="fax" /> 1-506-273-3273</span><br />
                  <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
                </Grid.Column>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default Wholesale;
