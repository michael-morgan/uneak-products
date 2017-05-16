import React from 'react';
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react';

function Footer() {
  const style = {
    segment: { padding: '5em 0' },
    p: { margin: '2em 0 0 0' },
    list: { marginTop: '2em' },
    a: { color: 'white' },
  };

  return (
    <footer>
      <Segment inverted vertical style={style.segment}>
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
                    <List.Content>
                      20 Columbus Street
                      Perth-Andover, NB E7H 1T3
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="call" />
                    <List.Content>1-800-666-4911</List.Content>
                  </List.Item>
                  <List.Item as="a" href="mailto:office@bolstercanada.com">
                    <List.Icon name="mail" />
                    <List.Content>office@bolstercanada.com</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column computer={3} tablet={4}>
                <Header as="h4" inverted>Company</Header>
                <List inverted link>
                  <List.Item as="a" href="/#events">Events</List.Item>
                  <List.Item as="a" href="/#partners">Partners</List.Item>
                  <List.Item as="a" href="/#offices">Global Offices</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column computer={3} tablet={4}>
                <List style={style.list} inverted link>
                  <List.Item as="a" href="/#warranty">Warranty</List.Item>
                  <List.Item as="a" href="/#brands">Brands</List.Item>
                  <List.Item as="a" href="/#wholesale">Wholesale</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column computer={7} tablet={16}>
                <Image
                  src="images/uneak-products-logo.png"
                  size="mini"
                  alt="Logo"
                  ui
                  centered
                />
                <p style={style.p}>Uneak is who we are, but Unique is what we aim for</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          <List horizontal inverted size="small" divided link>
            <List.Item as="a" href="#">Terms and Conditions</List.Item>
            <List.Item as="a" href="#">Privacy Policy</List.Item>
            <List.Item as="a" href="/contact">Contact Us</List.Item>
          </List>
        </Container>
      </Segment>
    </footer>
  );
}

export default Footer;
