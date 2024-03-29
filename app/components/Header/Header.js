import React from 'react';
import { Menu, Grid, Sidebar, Icon, Segment, Image } from 'semantic-ui-react';
import s from './styles.css';
import cx from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      if (this.state.visible) {
        this.toggleVisibility();
        this.hideSidebarMenu();
      }
    };

    this.toggleVisibility = () => {
      this.setState({ visible: !this.state.visible });
      setTimeout(() => {
        document.getElementById('sideBarOverlay').style.display = this.state.visible
        ? 'block'
        : 'none';
      }, 300);
    };
  }

  componentDidMount() {
    this.setActivePage();
  }

  setActivePage() {
    const location = window.location;
    const page = location.pathname.replace(/[/#]/g, '') || location.hash.replace('#', '');
    const pages = ['contact', 'about', 'jobs'];

    if (page) {
      this.setState({ activeItem: page });

      if (!pages.includes(page)) {
        // Must be the index view
        const waitToScroll = setTimeout(() => {
          if (document.readyState === 'complete') {
            clearTimeout(waitToScroll);
            document.getElementById(page).scrollIntoView(true);
          }
        }, 100);
      }
    }
  }

  hideSidebarMenu() {
    const sideBarMenu = document.getElementById('sidebarMenu');
    sideBarMenu.classList.remove('visible');
    sideBarMenu.classList.add('animating');
    setTimeout(() => sideBarMenu.classList.remove('animating'), 500);
  }

  render() {
    const { activeItem, visible } = this.state;

    return (
      <Segment vertical>
        <Grid container>
          <Grid.Row only="computer">
            <Grid.Column>
              <Menu
                fixed="top"
                size="massive"
                id={s.navMenu}
                secondary
                pointing
                fluid
              >
                <Menu.Item href="/" className={s.navItem} header>
                  <Image
                    src="images/build/uneak-products-logo.png"
                    alt="Uneak Products Logo"
                    style={{ width: '4.5em' }}
                  />
                </Menu.Item>

                <Menu.Item
                  id={s.brandsItem}
                  className={s.navItem}
                  name="brands"
                  active={activeItem === 'brands'}
                  onClick={this.handleItemClick}
                  href="/#brands"
                >
                  Brands
                </Menu.Item>

                <Menu.Item
                  id={s.eventsItem}
                  className={s.navItem}
                  name="events"
                  active={activeItem === 'events'}
                  onClick={this.handleItemClick}
                  href="/#events"
                >
                  Events
                </Menu.Item>

                <Menu.Item
                  id={s.partnersItem}
                  className={s.navItem}
                  name="partners"
                  active={activeItem === 'partners'}
                  onClick={this.handleItemClick}
                  href="/#partners"
                >
                  Partners
                </Menu.Item>

                <Menu.Item
                  id={s.officesItem}
                  className={s.navItem}
                  name="offices"
                  active={activeItem === 'offices'}
                  onClick={this.handleItemClick}
                  href="/#offices"
                >
                  Offices
                </Menu.Item>

                <Menu.Item
                  id={s.wholesaleItem}
                  className={s.navItem}
                  name="wholesale"
                  active={activeItem === 'wholesale'}
                  onClick={this.handleItemClick}
                  href="/#wholesale"
                >
                  Wholesale
                </Menu.Item>

                <Menu.Item
                  className={s.navItem}
                  name="about"
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                  href="/about"
                >
                  About
                </Menu.Item>

                <Menu.Item
                  className={s.navItem}
                  name="contact"
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                  href="/contact"
                >
                  Contact
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="tablet mobile">
            <Grid.Column>
              <div
                id="sideBarOverlay"
                className={s.sideBarOverlay}
                onClick={this.toggleVisibility}
              >
              </div>
              <Sidebar
                id="sidebarMenu"
                as={Menu}
                animation="overlay"
                width="wide"
                direction="right"
                visible={visible}
                icon="labeled"
                style={{ top: '64px', zIndex: 9999 }}
                vertical
              >
                <Menu.Item
                  id={s.brandsItem}
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="brands"
                  active={activeItem === 'brands'}
                  onClick={this.handleItemClick}
                  href="/#brands"
                >
                  Brands
                </Menu.Item>

                <Menu.Item
                  id={s.eventsItem}
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="events"
                  active={activeItem === 'events'}
                  onClick={this.handleItemClick}
                  href="/#events"
                >
                  Events
                </Menu.Item>

                <Menu.Item
                  id={s.partnersItem}
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="partners"
                  active={activeItem === 'partners'}
                  onClick={this.handleItemClick}
                  href="/#partners"
                >
                  Partners
                </Menu.Item>

                <Menu.Item
                  id={s.officesItem}
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="offices"
                  active={activeItem === 'offices'}
                  onClick={this.handleItemClick}
                  href="/#offices"
                >
                  Offices
                </Menu.Item>

                <Menu.Item
                  id={s.wholesaleItem}
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="wholesale"
                  active={activeItem === 'wholesale'}
                  onClick={this.handleItemClick}
                  href="/#wholesale"
                >
                  Wholesale
                </Menu.Item>

                <Menu.Item
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="about"
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                  href="/about"
                >
                  About
                </Menu.Item>

                <Menu.Item
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="contact"
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                  href="/contact"
                >
                  Contact
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher dimmed>
                <Menu
                  fixed="top"
                  size="massive"
                  id={s.navMenu}
                  pointing
                  secondary
                  fluid
                >
                  <Menu.Item href="/" header>
                    <Image
                      src="images/build/uneak-products-logo.png"
                      alt="Uneak Products Logo"
                      style={{ width: '4.5em' }}
                    />
                  </Menu.Item>

                  <Menu.Item
                    id={s.navMenuIcon}
                    onClick={this.toggleVisibility}
                    position="right"
                    icon
                  >
                    <Icon
                      name="sidebar"
                      size="large"
                    />
                  </Menu.Item>
                </Menu>
              </Sidebar.Pusher>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Header;
