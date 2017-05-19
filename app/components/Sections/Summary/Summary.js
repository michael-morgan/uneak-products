import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Summary(props) {
  const style = {
    grid: { marginTop: '1em' },
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
  };

  return (
    <Grid columns={2} style={style.grid} stackable container>
      <Grid.Row>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <Grid stackable>
            <Grid.Column textAlign="center" computer={16} tablet={16} mobile={16}>
              <Image
                shape="rounded"
                src="images/uneak-products-banner.png"
                alt="Uneak Products Placeholder"
                width="600"
                height="200"
                style={style.shadow}
                fluid
                bordered
              />
            </Grid.Column>
            <Grid.Column textAlign="center" computer={16} tablet={16} mobile={16}>
              <Header as="h1" style={props.style.colors.title}>{props.header}</Header>
            </Grid.Column>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <p style={props.style.colors.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                ultricies vel. Fusce tincidunt pellentesque magna, ut
                faucibus quam finibus vitae. Aenean sed ante non eros
                pharetra feugiat. Morbi turpis augue, blandit quis diam
                id, sodales pharetra est. Nunc feugiat viverra eros.
                Nunc suscipit diam nec egestas placerat. In ipsum lorem,
                porta vitae nibh a, commodo finibus risus.
              </p>
            </Grid.Column>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <p style={props.style.colors.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                ultricies vel. Fusce tincidunt pellentesque magna, ut
                faucibus quam finibus vitae. Aenean sed ante non eros
                pharetra feugiat. Morbi turpis augue, blandit quis diam
                id, sodales pharetra est. Nunc feugiat viverra eros.
                Nunc suscipit diam nec egestas placerat. In ipsum lorem,
                porta vitae nibh a, commodo finibus risus.
              </p>
            </Grid.Column>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Header as="h2" style={props.style.colors.action}>
                Visit our trusted brands <Icon name="chevron right" />
              </Header>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column computer={8} tablet={16}>
          <Grid columns={2} stackable>
            <Grid.Column textAlign="center" computer={8} tablet={8} mobile={16}>
              <a href="https://www.santassolution.com/" target="_blank" title="Santas Solutions">
                <DimmedImage
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                  size="medium"
                  shape="rounded"
                  src="images/santas-solutions-logo.png"
                  href="https://www.santassolution.com/"
                  alt="Brand Placeholder"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={8} tablet={8} mobile={16}>
              <a href="https://www.uneakgardens.com/" target="_blank" title="Uneak Gardens">
                <DimmedImage
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                  size="medium"
                  shape="rounded"
                  src="images/uneak-gardens-logo.png"
                  alt="Brand Placeholder"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={8} tablet={8} mobile={16}>
              <a href="https://www.google.com/" target="_blank" title="Nooski Trap Systems">
                <DimmedImage
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                  size="medium"
                  shape="rounded"
                  src="images/nooski-logo.png"
                  href="#"
                  alt="Brand Placeholder"
                />
              </a>
            </Grid.Column>
            <Grid.Column textAlign="center" computer={8} tablet={8} mobile={16}>
              <a href="https://www.google.com/" target="_blank" title="Biltek Industrial">
                <DimmedImage
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                  size="medium"
                  shape="rounded"
                  src="images/biltek-logo.png"
                  href="#"
                  alt="Brand Placeholder"
                />
              </a>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Summary.propTypes = {
  header: PropTypes.string,
  style: PropTypes.object,
};

export default Summary;
