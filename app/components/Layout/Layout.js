import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';
import BackToTop from '../Scroll/BackToTop';

function Layout(props) {
  return (
    <div>
      <BackToTop />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
