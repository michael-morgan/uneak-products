import React from 'react';
import { Dimmer, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';


class DimmedImage extends React.Component {

  static propTypes = {
    description: PropTypes.any.isRequired,
    shape: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { active: false };

    this.toggle = () => this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  render() {
    const { active } = this.state;
    const style = {
      p: {
        padding: '10px',
      },
      shadow: {
        WebkitBoxShadow: '16px 16px 16px -10px #777',
        MozBoxShadow: '16px 16px 16px -10px #777',
        boxShadow: '16px 16px 16px -10px #777',
      },
    };
    const content = (
      <div>
        <p style={style.p}>{this.props.description}</p>
      </div>
    );
    return (
      <Dimmer.Dimmable
        as={Image}
        shape={this.props.shape}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}
        size={this.props.size}
        src={this.props.src}
        alt={this.props.alt}
        style={style.shadow}
        bordered
      />
    );
  }
}

export default DimmedImage;
