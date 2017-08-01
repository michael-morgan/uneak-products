import React from 'react';
import { Grid, Header, Icon, Segment, Image } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import cx from 'classnames';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';

function Events() {
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
            as="h2"
            style={{ position: 'relative', fontSize: '2rem' }}
            className={sharedColors.action}
          >
            <span id="events" className={sharedStyles.anchorOffset}></span>
            Events
          </Header>
          <Header
            as="h3"
            id={s.visitText}
            className={sharedColors.title}
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
                  alt="Independent Garden Center Show logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" tablet={8} mobile={8} only="tablet mobile">
              <Image
                size="medium"
                src="images/build/igc-event.png"
                alt="Independent Garden Center Show Logo Image"
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
                  alt="National Hardware Event logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" tablet={8} mobile={8} only="tablet mobile">
              <Image
                size="medium"
                src="images/build/national-hardware-event.png"
                alt="National Hardware Event Logo Image"
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
                  alt="Home Hardware Event logo image"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" tablet={8} mobile={8} only="tablet mobile">
              <Image
                size="medium"
                src="images/build/home-hardware-event.png"
                alt="Home Hardware Event Logo Image"
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

export default Events;
