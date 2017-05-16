import React from 'react';
import { Divider } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Summary from '../../components/Sections/Summary';
import Brands from '../../components/Sections/Brands';
import Events from '../../components/Sections/Events';
import Partners from '../../components/Sections/Partners';
import Offices from '../../components/Sections/Offices';
import Warranty from '../../components/Sections/Warranty';
import Wholesale from '../../components/Sections/Wholesale';
import { title, header } from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Summary header={header} />
        <Divider section />
        <Brands />
        <Divider section />
        <Events />
        <Divider section />
        <Partners />
        <Divider section />
        <Offices />
        <Divider section />
        <Warranty />
        <Divider section />
        <Wholesale />
      </Layout>
    );
  }
}

export default HomePage;
