import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Partners(props) {
  const style = {
    anchorOffset: {
      position: 'absolute',
      top: '-3.4em',
    },
  };

  return (
    <Grid container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header
          as="h1"
          style={Object.assign({}, { position: 'relative' }, props.style.colors.title)}
        >
          <span id="partners" style={style.anchorOffset}></span>
          Partners
        </Header>
        <Header as="h3" style={props.style.colors.action}>
          Find us at these fine retailers <Icon name="chevron right" />
        </Header>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a
              href="http://www.acehardware.com/"
              target="_blank"
              title="Ace Hardware"
            >
              <DimmedImage
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/ace-logo.svg"
                alt="Ace Hardware"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a href="http://www.canac.ca/en/" target="_blank" title="Canac">
              <DimmedImage
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/canac-logo.png"
                href="#"
                alt="Canac"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a href="https://www.canadiantire.ca/" target="_blank" title="Canadian Tire">
              <DimmedImage
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/canadian-tire-logo.svg"
                href="#"
                alt="Canadian Tire"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a href="https://www.homedepot.ca/" target="_blank" title="Home Depot">
              <DimmedImage
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/home-depot-logo.svg"
                href="#"
                alt="Home Depot"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a href="https://www.homehardware.ca/" target="_blank" title="Home Hardware">
              <DimmedImage
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/home-hardware-logo.png"
                href="#"
                alt="Home Hardware"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a href="https://www.kent.ca/" target="_blank" title="Kent">
              <DimmedImage
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/kent-logo.png"
                href="#"
                alt="Kent"
              />
            </a>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

Partners.propTypes = {
  style: PropTypes.object,
};

export default Partners;
