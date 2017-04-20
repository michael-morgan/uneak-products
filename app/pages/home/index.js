import React from 'react';
import { Divider } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Summary from '../../components/Sections/Summary';
import Brands from '../../components/Sections/Brands';
import { title, header } from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Summary header={header} />
        <Divider section id="brands" />
        <Brands />
        <Divider section />
      </Layout>
    );
  }
}

export default HomePage;
