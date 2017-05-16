import React from 'react';
import { Grid, Header, Icon, Image, Divider } from 'semantic-ui-react';

function Offices() {
  const style = {
    column: { marginBottom: '3em' },
    anchorOffset: {
      position: 'absolute',
      top: '-3.8em',
    },
  };
  return (
    <Grid container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header as="h2" style={{ position: 'relative' }}>
          <span id="offices" style={style.anchorOffset}></span>
          Global Offices
        </Header>
        <p>Connect with our global teams <Icon name="chevron right" /></p>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid stackable>
          <Grid.Column computer={8} tablet={16} mobile={16} style={style.column}>
            <Grid>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Image
                  width="150"
                  height="113"
                  className="flag flag-icon-background flag-icon-ca"
                />
              </Grid.Column>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <span>Uneak Products</span><br />
                <span>20 Columbus Street</span><br />
                <span>Perth-Andover, NB E7H 1T3</span>
                <Divider hidden />
                <span><Icon name="phone" /> 1-506-273-9492</span><br />
                <span><Icon name="phone" /> 1-800-666-4911</span><br />
                <span><Icon name="fax" /> 1-506-273-3273</span><br />
                <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column computer={8} tablet={16} mobile={16} style={style.column}>
            <Grid>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Image
                  width="150"
                  height="113"
                  className="flag flag-icon-background flag-icon-us"
                />
              </Grid.Column>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <span>Uneak Products</span><br />
                <span>20 Columbus Street</span><br />
                <span>Perth-Andover, NB E7H 1T3</span>
                <Divider hidden />
                <span><Icon name="phone" /> 1-506-273-9492</span><br />
                <span><Icon name="phone" /> 1-800-666-4911</span><br />
                <span><Icon name="fax" /> 1-506-273-3273</span><br />
                <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

export default Offices;
