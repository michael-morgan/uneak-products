import React from 'react';
import { Menu } from 'semantic-ui-react';
import s from './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
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
            <Menu.Item href="/">
              <img
                src="images/uneak-products-logo.png"
                alt="Uneak Products Logo"
                style={{ width: '4.5em' }}
              />
            </Menu.Item>

            <Menu.Item
              id={s.brandsItem}
              name="brands"
              active={activeItem === 'brands'}
              onClick={this.handleItemClick}
              href="/#brands"
            >
              Brands
            </Menu.Item>

            <Menu.Item
              id={s.eventsItem}
              name="events"
              active={activeItem === 'events'}
              onClick={this.handleItemClick}
              href="/#events"
            >
              Events
            </Menu.Item>

            <Menu.Item
              id={s.partnersItem}
              name="partners"
              active={activeItem === 'partners'}
              onClick={this.handleItemClick}
              href="/#partners"
            >
              Partners
            </Menu.Item>

            <Menu.Item
              id={s.officesItem}
              name="offices"
              active={activeItem === 'offices'}
              onClick={this.handleItemClick}
              href="/#offices"
            >
              Offices
            </Menu.Item>

            <Menu.Item
              id={s.warrantyItem}
              name="warranty"
              active={activeItem === 'warranty'}
              onClick={this.handleItemClick}
              href="/#warranty"
            >
              Warranty
            </Menu.Item>

            <Menu.Item
              id={s.wholesaleItem}
              name="wholesale"
              active={activeItem === 'wholesale'}
              onClick={this.handleItemClick}
              href="/#wholesale"
            >
              Wholesale
            </Menu.Item>

            <Menu.Item
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              href="/contact"
            >
              Contact
            </Menu.Item>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
