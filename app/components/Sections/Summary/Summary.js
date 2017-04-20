import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Summary(props) {
  return (
    <Grid columns={2} stackable container>
      <Grid.Row>
        <Grid.Column>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column>
                <Image
                  shape="rounded"
                  src="http://placehold.it/600x200"
                  alt="Uneak Products Placeholder"
                  fluid
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">{props.header}</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p>
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
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p>
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
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p>Visit our trusted brands <Icon name="chevron right" /></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Grid columns={2} stackable doubling>
            <Grid.Column>
              <DimmedImage
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                ultricies vel. Fusce tincidunt pellentesque magna, ut
                faucibus quam finibus vitae. Aenean sed ante non eros
                pharetra feugiat.`}
                size="medium"
                shape="rounded"
                src="http://placehold.it/300x300"
                href="#"
                alt="Brand Placeholder"
              />
            </Grid.Column>
            <Grid.Column>
              <DimmedImage
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                ultricies vel. Fusce tincidunt pellentesque magna, ut
                faucibus quam finibus vitae. Aenean sed ante non eros
                pharetra feugiat.`}
                size="medium"
                shape="rounded"
                src="http://placehold.it/300x300"
                href="#"
                alt="Brand Placeholder"
              />
            </Grid.Column>
            <Grid.Column>
              <DimmedImage
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                ultricies vel. Fusce tincidunt pellentesque magna, ut
                faucibus quam finibus vitae. Aenean sed ante non eros
                pharetra feugiat.`}
                size="medium"
                shape="rounded"
                src="http://placehold.it/300x300"
                href="#"
                alt="Brand Placeholder"
              />
            </Grid.Column>
            <Grid.Column>
              <DimmedImage
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                ultricies vel. Fusce tincidunt pellentesque magna, ut
                faucibus quam finibus vitae. Aenean sed ante non eros
                pharetra feugiat.`}
                size="medium"
                shape="rounded"
                src="http://placehold.it/300x300"
                href="#"
                alt="Brand Placeholder"
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Summary.propTypes = {
  header: PropTypes.string,
};

export default Summary;
