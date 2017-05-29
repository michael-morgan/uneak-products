import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';
import s from './styles.css';

function Summary(props) {
  const style = {
    grid: {
      marginTop: '5em',
    },
    brandsLead: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    shadow: {
      WebkitBoxShadow: '0 10px 6px -6px #777',
      MozBoxShadow: '0 10px 6px -6px #777',
      boxShadow: '0 10px 6px -6px #777',
    },
    imageHeader: {
      position: 'absolute',
      top: '100px',
      left: '0',
      width: '100%',
    },
    imageContent: {
      position: 'absolute',
      top: '175px',
      left: '0',
      width: '100%',
      fontWeight: 'bold',
    },
  };

  return (
    <div>
      <Grid style={style.grid} container>
        <Grid.Row style={{ paddingTop: '0' }}>
          <Grid.Column id={s.summaryImage} textAlign="center" computer={16} tablet={16} mobile={16}>
            <div className={s.summaryImage}>
              <Image
                src="http://placehold.it/1920x1080"
                alt="Uneak Products Placeholder"
                fluid
              />
            </div>

            <Header
              as="h1"
              id={s.imageHeader}
              style={Object.assign({}, props.style.colors.title, style.imageHeader)}
            >
              {props.header}
            </Header>

            <p
              id={s.imageContent}
              style={Object.assign(
                {},
                props.style.colors.background,
                style.imageContent
              )}
            >
              {`As a manufacturer & Distributor, Uneak brings you a range of high quality
              products & services built to last and solve problems.`}
            </p>
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
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
                <a href="https://www.santassolution.com/" target="_blank" title="Santas Solutions">
                  <DimmedImage
                    classes={[s.imageBorder]}
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
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
                <a href="https://www.uneakgardens.com/" target="_blank" title="Uneak Gardens">
                  <DimmedImage
                    classes={[s.imageBorder]}
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
                  src="http://placehold.it/300x300"
                  alt="Brand Website Screenshot"
                />
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
                <a href="https://www.google.com/" target="_blank" title="Nooski Trap Systems">
                  <DimmedImage
                    classes={[s.imageBorder]}
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
                  src="http://placehold.it/300x300"
                  alt="Brand Website Screenshot"
                />
              </Grid.Column>
              <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
                <a href="https://www.google.com/" target="_blank" title="Biltek Industrial">
                  <DimmedImage
                    classes={[s.imageBorder]}
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
                  src="http://placehold.it/300x300"
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
