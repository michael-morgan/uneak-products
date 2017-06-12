import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { title } from './index.md';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';

class JobPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const style = {
      colors: {
        action: {
          color: '#f44336',
        },
      },
    };

    return (
      <Layout>
        <Grid className={sharedStyles.gridMargin} stackable container>
          <Grid.Column computer={16} tablet={16} mobile={16} textAlign="center">
            <Header as="h1" className={sharedColors.action} style={{ marginTop: '1em' }}>
              Jobs
            </Header>

            <iframe
              src="https://docs.google.com/gview?url=https://www.dropbox.com/s/v83x9i0abxporra/Uneak-Products-Application-Process.pdf?dl=1&embedded=true"
              style={{ width: '100%', height: '600px', marginBottom: '7em' }}
              frameBorder="0"
            >
            </iframe>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default JobPage;
