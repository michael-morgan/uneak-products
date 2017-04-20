import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Button } from 'semantic-ui-react';

function Brands(props) {
  return (
    <Grid stackable columns={4} container>
      <Grid.Row>
        <Grid.Column>
          <Card raised>
            <Image src="http://placehold.it/300x300" />
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
        <Grid.Column>
          <Card raised>
            <Image src="http://placehold.it/300x300" />
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
        <Grid.Column>
          <Card raised>
            <Image src="http://placehold.it/300x300" />
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
        <Grid.Column>
          <Card raised>
            <Image src="http://placehold.it/300x300" />
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
      </Grid.Row>
    </Grid>
  );
}

Brands.propTypes = {
  header: PropTypes.string,
};

export default Brands;
