import React from 'react';

function Footer() {
  const style = {
    padding: '5em 0em',
  };

  return (
    <footer>
      <div className="ui inverted vertical footer segment" style={style}>
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Group 1</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Group 2</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Group 3</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Footer Header</h4>
              <p>Extra space for a call to action inside the footer.</p>
            </div>
          </div>
          <div className="ui inverted section divider"></div>
          <img
            src="http://placehold.it/25x25"
            className="ui centered mini image"
            alt="Logo"
          />
          <div className="ui horizontal inverted small divided link list">
            <a className="item" href="#">Site Map</a>
            <a className="item" href="#">Terms and Conditions</a>
            <a className="item" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
