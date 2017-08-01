import React from 'react';
import Layout from '../../components/Layout';
import Summary from '../../components/Sections/Summary';
import Events from '../../components/Sections/Events';
import Partners from '../../components/Sections/Partners';
import Offices from '../../components/Sections/Offices';
import Wholesale from '../../components/Sections/Wholesale';
import { title } from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Summary />
        <Events />
        <Partners />
        <Offices />
        <Wholesale />
      </Layout>
    );
  }
}

export default HomePage;
