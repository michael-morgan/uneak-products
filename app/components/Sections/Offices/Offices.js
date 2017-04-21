import React from 'react';
import { Grid, Header, Icon, Image, Divider } from 'semantic-ui-react';

function Offices() {
  return (
    <Grid columns={1} container>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">Global Offices</Header>
          <p>Connect with our global teams <Icon name="chevron right" /></p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Image
                        width="150"
                        height="113"
                        className="flag flag-icon-background flag-icon-ca"
                        centered
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <span>Uneak Products</span><br />
                      <span>20 Columbus Street</span><br />
                      <span>Perth-Andover, NB E7H 1T3</span>
                      <Divider />
                      <span><Icon name="phone" /> 1-506-273-9492</span><br />
                      <span><Icon name="phone" /> 1-800-666-4911</span><br />
                      <span><Icon name="fax" /> 1-506-273-3273</span><br />
                      <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Image
                        width="150"
                        height="113"
                        className="flag flag-icon-background flag-icon-us"
                        centered
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <span>Uneak Products</span><br />
                      <span>20 Columbus Street</span><br />
                      <span>Perth-Andover, NB E7H 1T3</span>
                      <Divider />
                      <span><Icon name="phone" /> 1-506-273-9492</span><br />
                      <span><Icon name="phone" /> 1-800-666-4911</span><br />
                      <span><Icon name="fax" /> 1-506-273-3273</span><br />
                      <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Offices;
