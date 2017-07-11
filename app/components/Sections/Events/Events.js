import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Icon, Segment, Image } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import cx from 'classnames';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';

function Events(props) {
  return (
    <Segment
      className={cx(
        sharedStyles.sectionBG,
        sharedStyles.sectionMargin
      )}
      vertical
    >
      <Grid container>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Header
            as="h1"
            style={Object.assign({}, { position: 'relative' }, props.style.colors.action)}
          >
            <span id="events" className={sharedStyles.anchorOffset}></span>
            Events
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
            <Grid.Column textAlign="center" computer={4} only="computer">
              <a
                href="#"
                target="_blank"
                title="Visit IGC"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/igc-event.png"
                  alt="Independent Garden Center Show"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" tablet={8} mobile={8} only="tablet mobile">
              <Image
                size="medium"
                src="images/build/igc-event.png"
                alt="Independent Garden Center Show"
                centered
                bordered
              />
              <a
                href="#"
                target="_blank"
                title="Visit IGC"
                className={cx('ui primary button', sharedStyles.actionButton, s.visitButton)}
              >
                Visit
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} only="computer">
              <a
                href="#"
                target="_blank"
                title="Visit National Hardware"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/national-hardware-event.png"
                  alt="National Hardware Event"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" tablet={8} mobile={8} only="tablet mobile">
              <Image
                size="medium"
                src="images/build/national-hardware-event.png"
                alt="National Hardware Event"
                centered
                bordered
              />
              <a
                href="#"
                target="_blank"
                title="Visit National Hardware"
                className={cx('ui primary button', sharedStyles.actionButton, s.visitButton)}
              >
                Visit
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={4} only="computer">
              <a
                href="#"
                target="_blank"
                title="Visit Home Hardware"
              >
                <DimmedImage
                  description={<Icon name="linkify" size="huge" />}
                  size="medium"
                  shape="rounded"
                  src="images/build/home-hardware-event.png"
                  alt="Home Hardware Event"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" tablet={8} mobile={8} only="tablet mobile">
              <Image
                size="medium"
                src="images/build/home-hardware-event.png"
                alt="Home Hardware Event"
                centered
                bordered
              />
              <a
                href="#"
                target="_blank"
                title="Visit Home Hardware"
                className={cx('ui primary button', sharedStyles.actionButton, s.visitButton)}
              >
                Visit
              </a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

Events.propTypes = {
  style: PropTypes.object,
};

export default Events;
