import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon, Segment } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import sharedStyles from 'shared/styles/shared.css';

function Warranty(props) {
  return (
    <Segment className={sharedStyles.sectionMargin} vertical>
      <Grid style={{ marginBottom: '2em' }} container>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Header
            as="h1"
            style={Object.assign({}, { position: 'relative' }, props.style.colors.action)}
          >
            <span id="warranty" className={sharedStyles.anchorOffset}></span>
            Warranty
          </Header>
        </Grid.Column>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Grid>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a
                href="#"
                target="_blank"
                title="Warranty Placeholder"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/ss-warranty.png"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a
                href="#"
                target="_blank"
                title="Warranty Placeholder"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/ug-warranty.png"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a
                href="#"
                target="_blank"
                title="Warranty Placeholder"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/nooski-warranty.png"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
              <a
                href="#"
                target="_blank"
                title="Warranty Placeholder"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/biltek-warranty.png"
                  href="#"
                  alt="Warranty Placeholder"
                />
              </a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

Warranty.propTypes = {
  style: PropTypes.object,
};

export default Warranty;
