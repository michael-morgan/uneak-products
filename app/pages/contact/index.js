import React from 'react';
import { Grid, Divider, Icon, Header, Form } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { title } from './index.md';

class ContactPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const style = {
      grid: {
        margin: '1em 0',
      },
    };

    return (
      <Layout>
        <Grid columns={2} style={style.grid} stackable container>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Connect With Our Office Team</Header>

              <span>Uneak Products</span><br />
              <span>20 Columbus Street</span><br />
              <span>Perth-Andover, NB E7H 1T3</span><br /><br />
              <span><Icon name="phone" /> 1-506-273-9492</span><br />
              <span><Icon name="phone" /> 1-800-666-4911</span><br />
              <span><Icon name="fax" /> 1-506-273-3273</span><br />
              <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />
            </Grid.Column>
            <Grid.Column>
              <Header size="medium">Send Us A Message</Header>

              <Form>
                <Form.Input label="First name" placeholder="First name" required />
                <Form.Input label="Last name" placeholder="Last name" required />
                <Form.Input label="Company" placeholder="Company" />
                <Form.Input label="Email" placeholder="Email" required />
                <Form.TextArea label="Message" placeholder="Write us your message..." required />
                <Form.Checkbox label="Send me newsletters" />
                <Form.Button>Submit</Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ContactPage;
