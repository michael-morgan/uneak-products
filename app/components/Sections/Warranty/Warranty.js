import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Warranty(props) {
  const style = {
    anchorOffset: {
      position: 'absolute',
      top: '-3.4em',
    },
  };

  return (
    <Grid style={{ marginBottom: '2em' }} container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header
          as="h1"
          style={Object.assign({}, { position: 'relative' }, props.style.colors.title)}
        >
          <span id="warranty" style={style.anchorOffset}></span>
          Warranty
        </Header>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
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
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
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
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
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
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
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
  );
}

Warranty.propTypes = {
  style: PropTypes.object,
};

export default Warranty;
