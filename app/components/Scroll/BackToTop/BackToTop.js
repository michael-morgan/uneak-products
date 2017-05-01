import React from 'react';
import { Button, Icon, Rail } from 'semantic-ui-react';

class BackToTop extends React.Component {

  constructor(props) {
    super(props);

    this.state = { active: false };

    this.setActive = this.setActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.resetScroll = this.resetScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
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
    this.setActive(false);
    window.scroll(0, 0);
  }

  render() {
    return (
      <Rail position="right" size="mini" attached internal>
        {this.state.active &&
          <Button
            className="ui fixed bottom sticky"
            style={{ margin: '0 2px 2px 0', bottom: '0', right: '0' }}
            onClick={this.resetScroll}
            icon
          >
            <Icon name="arrow up" size="big" />
          </Button>}
      </Rail>
    );
  }
}

export default BackToTop;
