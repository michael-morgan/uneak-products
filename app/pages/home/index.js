import React from 'react';
import { Grid, Segment, Image, Header, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import DimmedImage from '../../components/Image/DimmedImage';
import { title, header } from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Segment padded="very">
          <Grid stackable columns={2} container>
            <Grid.Row>
              <Grid.Column>
                <Grid stackable>
                  <Grid.Row>
                    <Grid.Column>
                      <Image
                        fluid
                        shape="rounded"
                        src="http://placehold.it/600x200"
                        alt="Uneak Products Placeholder"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Header as="h2">{header}</Header>
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
                      <span>Visit our trusted brands <Icon name="chevron right" /></span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid stackable doubling columns={2}>
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
                      alt="Brand Placeholder"
                    />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Layout>
    );
  }

}

export default HomePage;
