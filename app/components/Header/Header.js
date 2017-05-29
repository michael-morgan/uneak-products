import React from 'react';
import { Menu } from 'semantic-ui-react';
import s from './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  componentDidMount() {
    let location = window.location;
    let page = location.pathname.replace(/[/#]/g, '') || location.hash.replace('#', '');

    if (page) {
      this.setState({ activeItem: page });

      if (page !== 'contact') {
        let waitToScroll = setTimeout(() => {
          if (document.readyState == 'complete') {
            clearTimeout(waitToScroll);
            document.getElementById(page).scrollIntoView(true);
          }
        }, 100);
      }
    }
  }

  render() {
    const { activeItem } = this.state;
    const style = {
      menu: {
        background: 'white',
        zIndex: '9999',
      },
    };

    return (
      <header>
        <nav>
          <Menu
            fixed="top"
            size="massive"
            id={s.navMenu}
            style={style.menu}
            secondary
            pointing
          >
            <Menu.Item href="/" className={s.navItem}>
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
              BRANDS
            </Menu.Item>

            <Menu.Item
              id={s.eventsItem}
              className={s.navItem}
              name="events"
              active={activeItem === 'events'}
              onClick={this.handleItemClick}
              href="/#events"
            >
              EVENTS
            </Menu.Item>

            <Menu.Item
              id={s.partnersItem}
              className={s.navItem}
              name="partners"
              active={activeItem === 'partners'}
              onClick={this.handleItemClick}
              href="/#partners"
            >
              PARTNERS
            </Menu.Item>

            <Menu.Item
              id={s.officesItem}
              className={s.navItem}
              name="offices"
              active={activeItem === 'offices'}
              onClick={this.handleItemClick}
              href="/#offices"
            >
              OFFICES
            </Menu.Item>

            <Menu.Item
              id={s.wholesaleItem}
              className={s.navItem}
              name="wholesale"
              active={activeItem === 'wholesale'}
              onClick={this.handleItemClick}
              href="/#wholesale"
            >
              WHOLESALE
            </Menu.Item>

            <Menu.Item
              id={s.warrantyItem}
              className={s.navItem}
              name="warranty"
              active={activeItem === 'warranty'}
              onClick={this.handleItemClick}
              href="/#warranty"
            >
              WARRANTY
            </Menu.Item>

            <Menu.Item
              className={s.navItem}
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              href="/contact"
            >
              CONTACT
            </Menu.Item>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
