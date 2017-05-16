import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';
import BackToTop from '../Scroll/BackToTop';

function Layout(props) {
  const style = {
    main: { marginTop: '5em' },
  };

  return (
    <main>
      <BackToTop />
      <Header />
      <main style={style.main}>
        {props.children}
      </main>
      <Footer />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
