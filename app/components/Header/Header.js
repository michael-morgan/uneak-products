import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Grid, Sidebar, Icon, Segment } from 'semantic-ui-react';
import s from './styles.css';
import cx from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: false, scrolled: false };
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

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.setActivePage();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
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

  handleScroll() {
    this.setState({ scrolled: (window.scrollY > 0) });
  }

  hideSidebarMenu() {
    const sideBarMenu = document.getElementById('sidebarMenu');
    sideBarMenu.classList.remove('visible');
    sideBarMenu.classList.add('animating');
    setTimeout(() => sideBarMenu.classList.remove('animating'), 500);
  }

  render() {
    const { activeItem, visible, scrolled } = this.state;
    const style = {
      sideBarOverlay: {
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9998,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        transition: 'opacity .5s',
        willChange: 'opacity',
      },
    };

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
                  <img
                    src="images/uneak-products-logo.png"
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
                  id={s.warrantyItem}
                  className={s.navItem}
                  name="warranty"
                  active={activeItem === 'warranty'}
                  onClick={this.handleItemClick}
                  href="/#warranty"
                >
                  Warranty
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
                style={style.sideBarOverlay}
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
                style={{ top: '72px', zIndex: 9999 }}
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
                  id={s.warrantyItem}
                  className={cx(s.navItem, s.mobileNavItem, 'sideMenuItem')}
                  name="warranty"
                  active={activeItem === 'warranty'}
                  onClick={this.handleItemClick}
                  href="/#warranty"
                >
                  Warranty
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
                  style={
                    this.props.showCover && !scrolled
                    ? { backgroundColor: 'transparent' }
                    : {}
                  }
                  pointing={
                    !(this.props.showCover && !scrolled)
                  }
                  secondary
                  fluid
                >
                  <Menu.Item href="/" header>
                    <img
                      src="images/uneak-products-logo.png"
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
                      style={
                        this.props.showCover && !scrolled
                        ? { color: 'white' }
                        : {}
                      }
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

Header.propTypes = {
  showCover: PropTypes.bool.isRequired,
};

export default Header;
