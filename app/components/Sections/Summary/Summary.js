import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Image, Header, Icon } from 'semantic-ui-react';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';
import cx from 'classnames';
import data from './data.json';

class Summary extends React.Component {

  constructor(props) {
    super(props);

    this.state = { brandIndex: 0 };
  }

  getBrand(brand, index) {
    return (
      <Grid.Column key={index} computer={4} tablet={8} mobile={8}>
        <Image
          size="medium"
          src={brand.images.main}
          bordered
        />
        <div className={s.mt5}>
          <a
            href="#"
            target="_blank"
            title={brand.name}
            className={cx('ui button', s.brandNestedButton)}
          >
            <Icon
              id={'viewIcon' + index}
              name={index === 0 ? 'chevron down' : 'chevron right'}
            />
            {` View`}
          </a>
          <a
            href={brand.links.home}
            target="_blank"
            title={brand.name}
            className={cx(
              'ui primary button',
              sharedStyles.actionButton,
              s.brandNestedButton
            )}
          >
            Visit
          </a>
        </div>
      </Grid.Column>
    );
  }

  getBrandNested(brand) {
    return (
      <Segment raised>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Grid>
              <Grid.Column computer={6} tablet={8} mobile={16}>
                <Image
                  src={brand.images.nested}
                  size="medium"
                  centered
                />
              </Grid.Column>
              <Grid.Column computer={10} tablet={8} mobile={16}>
                <Header
                  as="h3"
                  textAlign="center"
                  className={cx(sharedColors.action, s.brandNestedTitle)}
                >
                  {brand.title}
                </Header>
                <p className={s.brandNestedDescription}>
                  {brand.description}
                </p>
                <div className={s.buttonContainer}>
                  <a
                    href={brand.links.shop}
                    target="_blank"
                    title={brand.name}
                    className={cx(
                      'ui primary button',
                      sharedStyles.actionButton,
                      s.brandNestedButton
                    )}
                  >
                    Shop
                  </a>
                  <a
                    href={brand.links.retailer}
                    target="_blank"
                    title={brand.name}
                    className={cx(
                      'ui primary button',
                      sharedStyles.actionButton,
                      s.brandNestedButton
                    )}
                  >
                    Retailers
                  </a>
                  <a
                    href={brand.links.wholesale}
                    target="_blank"
                    title={brand.name}
                    className={cx(
                      'ui primary button',
                      sharedStyles.actionButton,
                      s.brandNestedButton
                    )}
                  >
                    Wholesale
                  </a>
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Segment>
    );
  }

  render() {
    const { brandIndex } = this.state;

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
                {data.map(this.getBrand)}
              </Grid>
            </Grid.Column>
          </Grid.Row>
          {this.getBrandNested(data[brandIndex])}
        </Grid>
      </Segment>
    );
  }
}

Summary.propTypes = {
  header: PropTypes.string,
  style: PropTypes.object,
};

export default Summary;
