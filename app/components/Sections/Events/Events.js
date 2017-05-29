import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';

function Events(props) {
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
          style={Object.assign({}, { position: 'relative' }, props.style.colors.action)}
        >
          <span id="events" style={style.anchorOffset}></span>
          EVENTS
        </Header>
        <Header
          as="h3"
          id={s.visitText}
          style={props.style.colors.title}
        >
          Visit us during these upcoming shows <Icon name="chevron right" />
        </Header>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a
              href="#"
              target="_blank"
              title="Event Placeholder"
            >
              <DimmedImage
                classes={[sharedStyles.contentBorder]}
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/igc-event.png"
                alt="Event Placeholder"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a
              href="#"
              target="_blank"
              title="Event Placeholder"
            >
              <DimmedImage
                classes={[sharedStyles.contentBorder]}
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/national-hardware-event.png"
                alt="Event Placeholder"
              />
            </a>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <a
              href="#"
              target="_blank"
              title="Event Placeholder"
            >
              <DimmedImage
                classes={[sharedStyles.contentBorder]}
                description={'Lorem ipsum.'}
                size="medium"
                shape="rounded"
                src="images/home-hardware-event.png"
                alt="Event Placeholder"
              />
            </a>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

Events.propTypes = {
  style: PropTypes.object,
};

export default Events;
