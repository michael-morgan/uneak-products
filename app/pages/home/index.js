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
        <Divider id="brands" section />
        <Brands />
        <Divider id="events" section />
        <Events />
        <Divider id="partners" section />
        <Partners />
        <Divider id="offices" section />
        <Offices />
        <Divider id="warranty" section />
        <Warranty />
        <Divider id="wholesale" section />
        <Wholesale />
      </Layout>
    );
  }
}

export default HomePage;
