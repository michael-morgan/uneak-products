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
        </Grid.Row>
      </Grid>
      <Grid container>
        <Grid.Row>
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Grid columns={4}>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <Image
                  size="medium"
                  src="images/ss-warranty.png"
                  bordered
                />
                <p className={s.shortText}>
                  America{"'"}s Top Selling Christmas Tree Stands & Accessories serving over 1 million happy customers & climbing
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
                  src="images/ug-warranty.png"
                  bordered
                />
                <p className={s.shortText}>
                  Creating the ultimate Uneak Experience in lawn & garden structures like you{"'"}ve never seen but have always thought about
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
                  src="images/nooski-warranty.png"
                  bordered
                />
                <p className={s.shortText}>
                  Shop the worlds Revolutionary Ring Trap for rodent control! A global solution to a very Pesky Problem
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
                  src="images/biltek-warranty.png"
                  bordered
                />
                <p className={s.shortText}>
                  Bringing quality workmanship & industry experience local to you. A thriving machine shop with results tough as steel
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
