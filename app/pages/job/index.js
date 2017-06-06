import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { title } from './index.md';
import sharedColors from 'shared/styles/colors.css';

class JobPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const style = {
      grid: {
        margin: '7em 0',
      },
      colors: {
        action: {
          color: '#f44336',
        }
      },
    };

    return (
      <Layout>
        <Grid style={style.grid} stackable container>
          <Grid.Column computer={16} tablet={16} mobile={16} textAlign="center">
            <Header as="h1" style={style.colors.action}>
              Jobs
            </Header>

            <iframe
              src="http://docs.google.com/gview?url=https://www.dropbox.com/s/v83x9i0abxporra/Uneak-Products-Application-Process.pdf?dl=1&embedded=true"
              style={{width: '100%', height: '600px'}}
              frameBorder="0">
            </iframe>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default JobPage;
