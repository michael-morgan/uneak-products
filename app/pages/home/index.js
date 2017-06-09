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
      divider: {
        borderTop: '1px solid rgba(244, 67, 54, 0)',
        borderBottom: '1px solid rgba(244, 67, 54, 0)',
      },
    };

    return (
      <Layout>
        <Summary header={header} style={style} />
        <Divider style={style.divider} section />
        <Brands style={style} />
        <Divider style={style.divider} section />
        <Events style={style} />
        <Divider style={style.divider} section />
        <Partners style={style} />
        <Divider style={style.divider} section />
        <Offices style={style} />
        <Divider style={style.divider} section />
        <Wholesale style={style} />
        <Divider style={style.divider} section />
        <Warranty style={style} />
      </Layout>
    );
  }
}

export default HomePage;
