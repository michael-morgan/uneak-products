import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react';

function Footer(props) {
  const style = {
    segment: { padding: '5em 0' },
    p: { margin: '2em 0 0 0' },
    list: { marginTop: '2em' },
    a: { color: 'white' },
  };

  return (
    <footer>
      <Segment style={style.segment} inverted vertical>
        <Container textAlign="center">
          <Grid stackable className={'inverted'}>
            <Grid.Row>
              <Grid.Column computer={3} tablet={8}>
                <Header as="h4" inverted>
                  <a href="/contact" style={style.a}>Contact</a>
                </Header>
                <List inverted link>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content style={props.style.colors.background}>
                      20 Columbus Street
                      Perth-Andover, NB E7H 1T3
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="call" />
                    <List.Content style={props.style.colors.background}>
                      1-800-666-4911
                    </List.Content>
                  </List.Item>
                  <List.Item as="a" href="mailto:office@bolstercanada.com">
                    <List.Icon name="mail" />
                    <List.Content style={props.style.colors.background}>
                      office@bolstercanada.com
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column computer={3} tablet={4}>
                <Header as="h4" inverted>Company</Header>
                <List inverted link>
                  <List.Item as="a" href="/#events" style={props.style.colors.background}>
                    Events
                  </List.Item>
                  <List.Item as="a" href="/#partners" style={props.style.colors.background}>
                    Partners
                  </List.Item>
                  <List.Item as="a" href="/#offices" style={props.style.colors.background}>
                    Global Offices
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column computer={3} tablet={4}>
                <List style={style.list} inverted link>
                  <List.Item as="a" href="/#warranty" style={props.style.colors.background}>
                    Warranty
                  </List.Item>
                  <List.Item as="a" href="/#brands" style={props.style.colors.background}>
                    Brands
                  </List.Item>
                  <List.Item as="a" href="/#wholesale" style={props.style.colors.background}>
                    Wholesale
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column computer={7} tablet={16}>
                <a href="/" title="Uneak Products">
                  <Image
                    src="images/uneak-products-logo.png"
                    size="small"
                    alt="Logo"
                    style={{ width: '100px' }}
                    ui
                    centered
                  />
                </a>
                <p style={style.p}>Uneak is who we are, but Unique is what we aim for</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          <List horizontal inverted size="small" divided link>
            <List.Item as="a" href="#" style={props.style.colors.background}>
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#" style={props.style.colors.background}>
              Privacy Policy
            </List.Item>
            <List.Item as="a" href="/contact" style={props.style.colors.background}>
              Contact Us
            </List.Item>
          </List>
        </Container>
      </Segment>
    </footer>
  );
}

Footer.propTypes = {
  style: PropTypes.object,
};

export default Footer;
