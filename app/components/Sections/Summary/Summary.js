import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import s from './styles.css';
import sharedStyles from 'shared/styles/shared.css';

function Summary(props) {
  return (
    <div>
      <Grid className={sharedStyles.gridMargin}>
        <Grid.Row style={{ paddingTop: '0' }}>
          <Grid.Column textAlign="center" computer={16} tablet={16} mobile={16}>
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
        <Grid.Row>
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Header as="h2" id={s.visitText} style={props.style.colors.action}>
              Visit our trusted brands <Icon name="chevron right" />
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
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
    </div>
  );
}

Summary.propTypes = {
  header: PropTypes.string,
  style: PropTypes.object,
};

export default Summary;
