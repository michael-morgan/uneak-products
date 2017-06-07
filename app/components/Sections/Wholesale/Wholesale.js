import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon, Card } from 'semantic-ui-react';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';

function Wholesale(props) {
  const style = {
    grid: {
      marginBottom: '50px',
    },
  };
  return (
    <div className={sharedStyles.sectionBG}>
      <Grid style={style.grid} container>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Header
            as="h1"
            style={Object.assign({}, { position: 'relative' }, props.style.colors.action)}
          >
            <span id="wholesale" className={sharedStyles.anchorOffset}></span>
            WHOLESALE
          </Header>
          <Header as="h3" id={s.connectText} style={props.style.colors.title}>
            Connect with our wholesale team <Icon name="chevron right" />
          </Header>
        </Grid.Column>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <p style={props.style.colors.title}>
            {`For information on our wholesale capabilities or to request
            wholesale product flyers & order forms for any of our brands
            please contact our Sales Associate`}
          </p>
        </Grid.Column>
        <Grid.Column computer={4} tablet={8} mobile={16}>
          <Card fluid raised>
            <Card.Content>
              <Card.Header style={props.style.colors.title}>
                Aleisha Gregory
              </Card.Header>
              <Card.Meta>Sales, Marketing & Logistics</Card.Meta>
              <Card.Description style={props.style.colors.title}>
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
    </div>
  );
}

Wholesale.propTypes = {
  style: PropTypes.object,
};

export default Wholesale;
