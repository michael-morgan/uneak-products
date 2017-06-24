import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment, Image } from 'semantic-ui-react';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';
import cx from 'classnames';

function Summary(props) {
  return (
    <Segment style={{ paddingBottom: '5em' }} vertical>
      <Grid className={sharedStyles.gridMargin} container>
        <Grid.Row>
          <Grid.Column
            computer={16}
            tablet={16}
            mobile={16}
          >
            <Image
              src="images/uneak-products-banner.png"
              size="huge"
              centered
            />
          </Grid.Column>
          <Grid.Column
            computer={16}
            tablet={16}
            mobile={16}
          >
            <Header
              id={s.visitText}
              style={props.style.colors.action}
              textAlign="center"
            >
              Uneak Is Who We Are Unique Is What We Aim For
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container>
        <Grid.Row>
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Grid columns={4}>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <Image
                  size="medium"
                  src="images/santas-solutions-logo.png"
                  bordered
                />
                <p className={s.shortText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="https://www.santassolution.com/"
                  target="_blank"
                  title="Santas Solutions"
                  className={cx('ui primary button', sharedStyles.actionButton)}
                >
                  Visit
                </a>
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <Image
                  size="medium"
                  src="images/uneak-gardens-logo.png"
                  bordered
                />
                <p className={s.shortText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  target="_blank"
                  title="Uneak Gardens"
                  className={cx('ui primary button', sharedStyles.actionButton)}
                >
                  Visit
                </a>
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <Image
                  size="medium"
                  src="images/nooski-logo.png"
                  bordered
                />
                <p className={s.shortText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  target="_blank"
                  title="Nooski Trap Systems"
                  className={cx('ui primary button', sharedStyles.actionButton)}
                >
                  Visit
                </a>
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <Image
                  size="medium"
                  src="images/biltek-logo.png"
                  bordered
                />
                <p className={s.shortText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  target="_blank"
                  title="Biltek Industrial"
                  className={cx('ui primary button', sharedStyles.actionButton)}
                >
                  Visit
                </a>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

Summary.propTypes = {
  header: PropTypes.string,
  style: PropTypes.object,
};

export default Summary;
