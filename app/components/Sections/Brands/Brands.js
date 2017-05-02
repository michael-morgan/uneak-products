import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Button, Header, Icon } from 'semantic-ui-react';

function Brands() {
  return (
    <Grid columns={1} container>
      <Grid.Column>
        <Header as="h2">Brands</Header>
      </Grid.Column>
      <Grid.Column>
        <p>Learn more about our brands <Icon name="chevron right" /></p>
      </Grid.Column>
      <Grid.Column>
        <Grid columns={4} stackable>
          <Grid.Column computer={4} tablet={8}>
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
          <Grid.Column computer={4} tablet={8}>
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
          <Grid.Column computer={4} tablet={8}>
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
          <Grid.Column computer={4} tablet={8}>
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
