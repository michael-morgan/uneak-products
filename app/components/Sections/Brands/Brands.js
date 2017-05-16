import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Button, Header, Icon } from 'semantic-ui-react';

function Brands() {
  const style = {
    anchorOffset: {
      position: 'absolute',
      top: '-3.8em',
    },
  };

  return (
    <Grid container>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Header as="h2" style={{ position: 'relative' }}>
          <span id="brands" style={style.anchorOffset}></span>
          Brands
        </Header>
        <p>Learn more about our brands <Icon name="chevron right" /></p>
      </Grid.Column>
      <Grid.Column computer={16} tablet={16} mobile={16}>
        <Grid columns={4} stackable>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card raised>
              <Image src="images/santas-solutions-logo.png" />
              <Card.Content>
                <Card.Header>Santa's Solution</Card.Header>
                <Card.Description>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button primary>Visit</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card raised>
              <Image src="images/uneak-gardens-logo.png" />
              <Card.Content>
                <Card.Header>Uneak Gardens</Card.Header>
                <Card.Description>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button primary>Visit</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card raised>
              <Image src="images/nooski-logo.png" />
              <Card.Content>
                <Card.Header>Nooski</Card.Header>
                <Card.Description>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button primary>Visit</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={4} tablet={8} mobile={16}>
            <Card raised>
              <Image src="images/biltek-logo.png" />
              <Card.Content>
                <Card.Header>Biltek</Card.Header>
                <Card.Description>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                  venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                  ultricies vel. Fusce tincidunt pellentesque magna, ut
                  faucibus quam finibus vitae. Aenean sed ante non eros
                  pharetra feugiat.`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button primary>Visit</Button>
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
};

export default Brands;
