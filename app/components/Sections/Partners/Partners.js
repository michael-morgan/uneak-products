import React from 'react';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';
import cx from 'classnames';

function Partners() {
  return (
    <Segment className={cx(sharedStyles.sectionBG, sharedStyles.sectionMargin)} vertical>
      <Grid container>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Header
            as="h2"
            style={{ position: 'relative', fontSize: '2rem' }}
            className={sharedColors.action}
          >
            <span id="partners" className={sharedStyles.anchorOffset}></span>
            Partners
          </Header>
          <Header
            as="h3"
            className={cx(sharedStyles.sectionActionText, sharedColors.title)}
          >
            Find us at these fine retailers <Icon name="chevron right" />
          </Header>
        </Grid.Column>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Grid>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a
                href="http://www.acehardware.com/"
                target="_blank"
                title="Ace Hardware"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/ace-logo.svg"
                  alt="Ace Hardware logo image"
                  classes={[sharedStyles.dimmedImageBG]}
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="http://www.canac.ca/en/" target="_blank" title="Canac">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/canac-logo.png"
                  href="#"
                  alt="Canac logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="https://www.canadiantire.ca/" target="_blank" title="Canadian Tire">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/canadian-tire-logo.svg"
                  href="#"
                  alt="Canadian Tire logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="https://www.homedepot.ca/" target="_blank" title="Home Depot">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/home-depot-logo.svg"
                  href="#"
                  alt="Home Depot logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="https://www.homehardware.ca/" target="_blank" title="Home Hardware">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/home-hardware-logo.png"
                  href="#"
                  alt="Home Hardware logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="https://www.rona.ca/en" target="_blank" title="Rona">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/rona-logo.png"
                  href="#"
                  alt="Rona logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="https://www.kent.ca/" target="_blank" title="Kent">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/kent-logo.png"
                  href="#"
                  alt="Kent logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a href="https://www.patrickmorin.com/" target="_blank" title="Patrick Morin">
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/patrick-morin-logo.png"
                  href="#"
                  alt="Patrick Morin logo image"
                />
              </a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Partners;
