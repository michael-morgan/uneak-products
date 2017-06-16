import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header, Segment } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';

function Summary(props) {
  return (
    <Segment style={{ paddingBottom: '5em' }} vertical>
      <Grid className={sharedStyles.gridMargin} container>
        <Grid.Row style={{ paddingTop: '0' }}>
          <Grid.Column mobile={16} only="mobile" style={{ height: '500px' }}></Grid.Column>
          <Grid.Column
            textAlign="center"
            computer={16}
            tablet={16}
            only="tablet computer"
          >
            <div className={s.summaryImage}>
              <Image
                id={s.coverImage}
                src="images/cover-image.png"
                alt="Uneak Products Placeholder"
                fluid
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container>
        <Grid.Row only="tablet computer">
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Header
              as="h2"
              id={s.visitText}
              style={props.style.colors.action}
              textAlign="center"
            >
              Visit our trusted brands
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="tablet computer">
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Grid columns={4} stackable>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <a href="https://www.santassolution.com/" target="_blank" title="Santas Solutions">
                  <DimmedImage
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                    venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                    ultricies vel. Fusce tincidunt pellentesque magna, ut
                    faucibus quam finibus vitae. Aenean sed ante non eros
                    pharetra feugiat.`}
                    size="medium"
                    shape="circular"
                    src="images/santas-solutions-logo.png"
                    href="https://www.santassolution.com/"
                    alt="Brand Placeholder"
                  />
                </a>
                <Image
                  className={s.imageScreenShot}
                  src="images/ss-screenshot.png"
                  alt="Brand Website Screenshot"
                />
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <a href="https://www.uneakgardens.com/" target="_blank" title="Uneak Gardens">
                  <DimmedImage
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                    venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                    ultricies vel. Fusce tincidunt pellentesque magna, ut
                    faucibus quam finibus vitae. Aenean sed ante non eros
                    pharetra feugiat.`}
                    size="medium"
                    shape="circular"
                    src="images/uneak-gardens-logo.png"
                    alt="Brand Placeholder"
                  />
                </a>
                <Image
                  className={s.imageScreenShot}
                  src="images/coming-soon.png"
                  alt="Brand Website Screenshot"
                />
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <a href="https://www.google.com/" target="_blank" title="Nooski Trap Systems">
                  <DimmedImage
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                    venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                    ultricies vel. Fusce tincidunt pellentesque magna, ut
                    faucibus quam finibus vitae. Aenean sed ante non eros
                    pharetra feugiat.`}
                    size="medium"
                    shape="circular"
                    src="images/nooski-logo.png"
                    href="#"
                    alt="Brand Placeholder"
                  />
                </a>
                <Image
                  className={s.imageScreenShot}
                  src="images/nooski-screenshot.png"
                  alt="Brand Website Screenshot"
                />
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={8}>
                <a href="https://www.google.com/" target="_blank" title="Biltek Industrial">
                  <DimmedImage
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                    venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                    ultricies vel. Fusce tincidunt pellentesque magna, ut
                    faucibus quam finibus vitae. Aenean sed ante non eros
                    pharetra feugiat.`}
                    size="medium"
                    shape="circular"
                    src="images/biltek-logo.png"
                    href="#"
                    alt="Brand Placeholder"
                  />
                </a>
                <Image
                  className={s.imageScreenShot}
                  src="images/biltek-screenshot.png"
                  alt="Brand Website Screenshot"
                />
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
