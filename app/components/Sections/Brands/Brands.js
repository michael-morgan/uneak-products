import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Header, Icon } from 'semantic-ui-react';
import sharedStyles from 'shared/styles/shared.css';

function Brands(props) {
  const style = {
    anchorOffset: {
      position: 'absolute',
      top: '-3.4em',
    },
    card: { margin: '0 auto' },
  };

  return (
    <Grid container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header
          as="h1"
          style={Object.assign({}, { position: 'relative' }, props.style.colors.title)}
        >
          <span id="brands" style={style.anchorOffset}></span>
          Brands
        </Header>
        <Header
          as="h3"
          className={sharedStyles.sectionActionText}
          style={props.style.colors.action}
        >
          Learn more about our brands <Icon name="chevron right" />
        </Header>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid columns={4} stackable>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card style={style.card} raised>
              <Image src="images/santas-solutions-logo.png" />
              <Card.Content style={style.cardContent}>
                <Card.Header style={props.style.colors.title}>
                  Santa's Solution
                </Card.Header>
                <Card.Description style={props.style.colors.title}>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a
                  href="https://www.santassolution.com/"
                  target="_blank"
                  title="Santas Solutions"
                  className="ui primary button"
                >
                  Visit
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card style={style.card} raised>
              <Image src="images/uneak-gardens-logo.png" />
              <Card.Content>
                <Card.Header style={props.style.colors.title}>
                  Uneak Gardens
                </Card.Header>
                <Card.Description style={props.style.colors.title}>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a
                  href="https://www.uneakgardens.com/"
                  target="_blank"
                  title="Uneak Gardens"
                  className="ui primary button"
                >
                  Visit
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card style={style.card} raised>
              <Image src="images/nooski-logo.png" />
              <Card.Content>
                <Card.Header style={props.style.colors.title}>
                  Nooski
                </Card.Header>
                <Card.Description style={props.style.colors.title}>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  title="Nooski Trap Systems"
                  className="ui primary button"
                >
                  Visit
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card style={style.card} raised>
              <Image src="images/biltek-logo.png" />
              <Card.Content>
                <Card.Header style={props.style.colors.title}>
                  Biltek
                </Card.Header>
                <Card.Description style={props.style.colors.title}>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  title="Biltek Industrial"
                  className="ui primary button"
                >
                  Visit
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>
  );
}

Brands.propTypes = {
  header: PropTypes.string,
  style: PropTypes.object,
};

export default Brands;
