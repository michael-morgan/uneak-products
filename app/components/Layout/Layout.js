import React from 'react';
import Footer from '../Footer';
import PropTypes from 'prop-types';

function Layout(props) {
  return (
    <main>
      {props.children}
      <Footer />
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
