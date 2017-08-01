import React from 'react';
import { Grid, Segment, Image, Header, Icon } from 'semantic-ui-react';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';
import cx from 'classnames';
import s from './styles.css';
import data from './data.json';

class Summary extends React.Component {

  constructor(props) {
    super(props);

    this.state = { brandIndex: 0 };
    this.getBrand = this.getBrand.bind(this);
    this.getBrandNested = this.getBrandNested.bind(this);
  }

  getBrand(brand, index) {
    return (
      <Grid.Column key={index} computer={4} tablet={8} mobile={16}>
        <Image
          src={brand.images.main}
          alt={`${brand.name} brand image`}
          bordered
          centered
          fluid
        />
        <a
          className={s.brandViewButton}
          onClick={() => this.switchView(index)}
        >
          <Icon
            id={`viewIcon${index}`}
            name={index === this.state.brandIndex ? 'chevron down' : 'chevron right'}
          />
          {'View'}
        </a>
        <a
          href={brand.location}
          target="_blank"
          title={brand.name}
          className={cx(
            'ui primary button',
            s.brandVisitButton,
            sharedStyles.actionButton
          )}
        >
          Visit
        </a>
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
                  alt={`${brand.name} logo image`}
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
                  {brand.links.map(
                    (link, index) =>
                    (
                      <a
                        key={index}
                        href={link.location}
                        target="_blank"
                        title={brand.name}
                        className={cx(
                          'ui primary button',
                          sharedStyles.actionButton,
                          s.brandNestedButton
                        )}
                      >
                        {link.title}
                      </a>
                    )
                  )}
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Segment>
    );
  }

  switchView(index) {
    this.setState({ brandIndex: index });
    const brandInfo = document.getElementById('brandInfo');
    window.scrollTo(brandInfo.offsetLeft, (brandInfo.offsetTop - 40));
  }

  render() {
    const { brandIndex } = this.state;

    return (
      <Segment vertical>
        <Header as="h1" className={s.mainHeader}>Uneak Products - A Division of BCI</Header>
        <Image
          src="images/build/uneak-products-banner.png"
          alt="Uneak Products banner image"
          style={{ marginBottom: '10px' }}
          centered
          fluid
        />
        <Grid className={sharedStyles.sectionBG} container>
          <Grid.Row>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <span
                id="brands"
                style={{
                  position: 'absolute',
                  top: '-4.5em',
                }}
              >
              </span>
              <Grid columns={4}>
                {data.map(this.getBrand)}
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="brandInfo">
            <Grid.Column computer={16} tablet={16} mobile={16}>
              {this.getBrandNested(data[brandIndex])}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Summary;
