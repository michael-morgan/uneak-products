import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';
import BackToTop from '../Scroll/BackToTop';

function Layout(props) {
  const style = {
    main: { marginTop: '5em' },
    colors: {
      background: { color: '#ffffff' },
      action: { color: '#80cc28' },
      title: { color: '#656263' },
      content: { color: '#a7a6a6' },
    },
  };

  return (
    <main>
      <BackToTop style={style} />
      <Header style={style} />
      <main style={style.main}>
        {props.children}
      </main>
      <Footer style={style} />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
