import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import s from './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
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
            stackable
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

            <Menu.Menu>
              <Dropdown className={s.navItem} text="SECTIONS" item>
                <Dropdown.Menu>
                  <Dropdown.Item
                    id={s.brandsItem}
                    className={s.navItem}
                    name="brands"
                    active={activeItem === 'brands'}
                    onClick={this.handleItemClick}
                    href="/#brands"
                  >
                    Brands
                  </Dropdown.Item>

                  <Dropdown.Item
                    id={s.eventsItem}
                    className={s.navItem}
                    name="events"
                    active={activeItem === 'events'}
                    onClick={this.handleItemClick}
                    href="/#events"
                  >
                    Events
                  </Dropdown.Item>

                  <Dropdown.Item
                    id={s.partnersItem}
                    className={s.navItem}
                    name="partners"
                    active={activeItem === 'partners'}
                    onClick={this.handleItemClick}
                    href="/#partners"
                  >
                    Partners
                  </Dropdown.Item>

                  <Dropdown.Item
                    id={s.officesItem}
                    className={s.navItem}
                    name="offices"
                    active={activeItem === 'offices'}
                    onClick={this.handleItemClick}
                    href="/#offices"
                  >
                    Offices
                  </Dropdown.Item>

                  <Dropdown.Item
                    id={s.wholesaleItem}
                    className={s.navItem}
                    name="wholesale"
                    active={activeItem === 'wholesale'}
                    onClick={this.handleItemClick}
                    href="/#wholesale"
                  >
                    Wholesale
                  </Dropdown.Item>

                  <Dropdown.Item
                    id={s.warrantyItem}
                    className={s.navItem}
                    name="warranty"
                    active={activeItem === 'warranty'}
                    onClick={this.handleItemClick}
                    href="/#warranty"
                  >
                    Warranty
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>

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
        </nav>
      </header>
    );
  }
}

export default Header;
