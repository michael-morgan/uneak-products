import React from 'react';
import { Grid, Header, Icon, Card } from 'semantic-ui-react';

function Wholesale() {
  const style = {
    grid: {
      marginBottom: '50px',
    },
  };
  return (
    <Grid columns={1} style={style.grid} container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">Wholesale</Header>
          <p>Connect with our wholesale team <Icon name="chevron right" /></p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            {`For information on our wholesale capabilities or to request
            wholesale product flyers & order forms for any of our brands
            please contact our Sales Associate`}
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Card fluid raised>
            <Card.Content>
              <Card.Header>Aleisha Gregory</Card.Header>
              <Card.Meta>Sales, Marketing & Logistics</Card.Meta>
              <Card.Description>
                <Grid columns={1} divided="vertically">
                  <Grid.Row>
                    <Grid.Column>
                      <span>Uneak Products</span><br />
                      <span>20 Columbus Street</span><br />
                      <span>Perth-Andover, NB E7H 1T3</span>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <span><Icon name="phone" /> 1-506-273-9492</span><br />
                      <span><Icon name="phone" /> 1-800-666-4911</span><br />
                      <span><Icon name="fax" /> 1-506-273-3273</span><br />
                      <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Wholesale;
