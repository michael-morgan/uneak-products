import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';
import DimmedImage from '../../Image/DimmedImage';

function Summary(props) {
  const style = {
    grid: { marginTop: '1em' },
  };

  return (
    <Grid columns={2} style={style.grid} stackable container>
      <Grid.Row>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <Grid stackable>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Image
                shape="rounded"
                src="images/uneak-products-banner.png"
                alt="Uneak Products Placeholder"
                width="600"
                height="200"
                fluid
                bordered
              />
            </Grid.Column>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Header as="h2">{props.header}</Header>
            </Grid.Column>
            <Grid.Column computer={16} tablet={16} mobile={16}>
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
            <Grid.Column computer={16} tablet={16} mobile={16}>
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
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <p>Visit our trusted brands <Icon name="chevron right" /></p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column computer={8} tablet={16}>
          <Grid columns={2} stackable>
            <Grid.Column computer={8} tablet={8} mobile={16}>
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
                href="#"
                alt="Brand Placeholder"
              />
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
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
                href="#"
                alt="Brand Placeholder"
              />
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
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
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
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
