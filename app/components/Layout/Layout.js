import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import Footer from '../Footer';
import Header from '../Header';
import BackToTop from '../Scroll/BackToTop';
import s from './styles.css';

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
    <div>
      <BackToTop style={style} />
      <Segment id={s.mobileCoverSegment} vertical>
        <Grid>
          <Grid.Row only="mobile" id={s.mobileCover}>
            <Grid.Column mobile={16}>
              <h1 id={s.headingOne} className={s.summaryHeading}>UNEAK IS WHO WE ARE</h1>
              <h1 id={s.headingTwo} className={s.summaryHeading}>UNIQUE IS WHAT WE AIM FOR</h1>
              <h2 id={s.headingThree} className={s.summaryHeading}>A DIVISION OF BCI</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header style={style} />
      {props.children}
      <Footer style={style} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
