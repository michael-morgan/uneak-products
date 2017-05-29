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

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    document.title = title;
  }

  render() {
    const style = {
      colors: {
        background: { color: '#ffffff' },
        action: { color: '#f44336' },
        title: { color: '#656263' },
        content: { color: '#a7a6a6' },
      },
    };

    return (
      <Layout>
        <Summary header={header} style={style} />
        <Divider section />
        <Brands style={style} />
        <Divider section />
        <Events style={style} />
        <Divider section />
        <Partners style={style} />
        <Divider section />
        <Offices style={style} />
        <Divider section />
        <Warranty style={style} />
        <Divider section />
        <Wholesale style={style} />
      </Layout>
    );
  }
}

export default HomePage;
