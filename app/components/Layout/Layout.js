import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import BackToTop from '../Scroll/BackToTop';

function Layout(props) {
  return (
    <main>
      <BackToTop />
      <div>
        {props.children}
        <Footer />
      </div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
