import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import Footer from '../Footer';
import PropTypes from 'prop-types';

function Layout(props) {
  return (
    <main>
      <div id="context">
        {props.children}
        <Footer />
      </div>
      <div className="right ui rail" style={{ left: '89%' }}>
        <Button
          id="scrollToTop"
          className="ui fixed bottom sticky"
          style={{ marginBottom: '2px' }}
          icon
        >
          <Icon name="arrow up" size="big" />
        </Button>
      </div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
