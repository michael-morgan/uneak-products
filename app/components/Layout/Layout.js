import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';
import BackToTop from '../Scroll/BackToTop';

function Layout(props) {
  const style = {
    main: { marginTop: '5em' },
    colors: {
      background: { color: '#ffffff' },
      action: { color: '#f44336' },
      title: { color: '#656263' },
      content: { color: '#a7a6a6' },
    },
  };

  return (
    <Segment vertical>
      <BackToTop style={style} />
      <Header style={style} />
      {props.children}
      <Footer style={style} />
    </Segment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
