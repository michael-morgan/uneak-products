import React from 'react';
import { Segment, Grid, Header, List, Image } from 'semantic-ui-react';
import sharedColors from 'shared/styles/colors.css';
import s from './styles.css';

function Footer() {
  const style = {
    segment: { padding: '5em 0' },
    p: { margin: '2em 0 0 0' },
    list: { marginTop: '2em' },
    a: { color: 'white' },
  };

  return (
    <Segment
      style={Object.assign({}, style.segment, { backgroundColor: '#616161' })}
      inverted
      vertical
    >
      <Grid className={'inverted'} textAlign="center" container stackable>
        <Grid.Column computer={3} tablet={8}>
          <Header as="h4" inverted>
            <a href="/contact" style={style.a}>Contact</a>
          </Header>
          <List id="contactList" inverted link>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content className={sharedColors.background}>
                20 Columbus Street
                Perth-Andover, NB E7H 1T3
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="call" />
              <List.Content className={sharedColors.background}>
                1-800-666-4911
              </List.Content>
            </List.Item>
            <List.Item as="a" href="mailto:office@bolstercanada.com">
              <List.Icon name="mail" />
              <List.Content className={sharedColors.background}>
                office@bolstercanada.com
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column computer={6} tablet={8}>
          <Header as="h4" inverted>Company</Header>
          <Grid>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <List inverted link>
                <List.Item as="a" href="/#events" className={sharedColors.background}>
                  Events
                </List.Item>
                <List.Item as="a" href="/#partners" className={sharedColors.background}>
                  Partners
                </List.Item>
                <List.Item as="a" href="/#offices" className={sharedColors.background}>
                  Global Offices
                </List.Item>
                <List.Item as="a" href="/#brands" className={sharedColors.background}>
                  Brands
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <List inverted link>
                <List.Item as="a" href="/#wholesale" className={sharedColors.background}>
                  Wholesale
                </List.Item>
                <List.Item as="a" href="/about" className={sharedColors.background}>
                  About
                </List.Item>
                <List.Item as="a" href="/jobs" className={sharedColors.background}>
                  Jobs
                </List.Item>
                <List.Item as="a" href="/contact" className={sharedColors.background}>
                  Contact
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column computer={7} tablet={16} className={s.footerBox}>
          <a href="/" title="Uneak Products">
            <Image
              src="images/build/uneak-products-logo.png"
              size="small"
              alt="Uneak Products Logo Image"
              style={{ width: '150px' }}
              ui
              centered
            />
          </a>
          <p style={style.p}>Uneak is who we are, but Unique is what we aim for</p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Footer;
