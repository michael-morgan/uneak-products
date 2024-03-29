import React from 'react';
import { Button, Icon, Rail } from 'semantic-ui-react';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';
import cx from 'classnames';

class BackToTop extends React.Component {

  constructor(props) {
    super(props);

    this.state = { active: false };

    this.setActive = this.setActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.resetScroll = this.resetScroll.bind(this);

    this.style = {
      action: { color: '#f44336' },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setActive(value) {
    this.setState({ active: value });
  }

  handleScroll() {
    this.setActive(window.scrollY > 0);
  }

  resetScroll() {
    const animate = setInterval(() => {
      window.scrollBy(0, -75);

      if (window.scrollY <= 0) {
        clearInterval(animate);
        this.setActive(false);
      }
    }, 10);
  }

  render() {
    return (
      <Rail position="right" size="mini" attached internal>
        {this.state.active &&
          <Button
            className={cx('ui fixed bottom sticky', sharedStyles.actionButton)}
            style={{
              margin: '0 15px 15px 0',
              bottom: '0',
              right: '0',
              backgroundColor: this.style.action.color,
              boxShadow: '#000 3px 2px 10px -3px',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
            }}
            onClick={this.resetScroll}
            icon
          >
            <Icon
              name="chevron up"
              size="large"
              className={sharedColors.background}
              style={{
                fontSize: '3.0em',
                position: 'absolute',
                top: '5px',
                left: '6px',
              }}
            />
          </Button>}
      </Rail>
    );
  }
}

export default BackToTop;
