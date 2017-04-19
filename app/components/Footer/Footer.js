import React from 'react';
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react';

function Footer() {
  const style = {
    segment: { padding: '5em 0' },
    p: { margin: '2em 0 0 0' },
  };

  return (
    <footer>
      <Segment inverted vertical style={style.segment}>
        <Container textAlign="center">
          <Grid stackable divided className={'inverted'}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header as="h4" inverted>Contact</Header>
                <List inverted link>
                  <List.Item as="a" href="#">
                    <List.Icon name="marker" />
                    <List.Content>Address</List.Content>
                  </List.Item>
                  <List.Item as="a" href="#">
                    <List.Icon name="call" />
                    <List.Content>Phone</List.Content>
                  </List.Item>
                  <List.Item as="a" href="#">
                    <List.Icon name="mail" />
                    <List.Content>Email</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List inverted link>
                  <List.Item as="a" href="#">Events</List.Item>
                  <List.Item as="a" href="#">Partners</List.Item>
                  <List.Item as="a" href="#">Global Offices</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List inverted link>
                  <List.Item as="a" href="#">Warranty</List.Item>
                  <List.Item as="a" href="#">Brands</List.Item>
                  <List.Item as="a" href="#">Wholesale</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image
                  src="http://placehold.it/25x25"
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
          </List>
        </Container>
      </Segment>
    </footer>
  );
}

export default Footer;
