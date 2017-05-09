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
      iframe: {
        border: '0',
        width: '100%',
        height: '382px',
      },
    };

    return (
      <Layout>
        <Grid style={style.grid} stackable container>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Header as="h2">Connect With Our Office Team</Header>

            <span>Uneak Products</span><br />
            <span>20 Columbus Street</span><br />
            <span>Perth-Andover, NB E7H 1T3</span><br /><br />
            <span><Icon name="phone" /> 1-506-273-9492</span><br />
            <span><Icon name="phone" /> 1-800-666-4911</span><br />
            <span><Icon name="fax" /> 1-506-273-3273</span><br />
            <span><Icon name="mail outline" /> office@bolstercanada.com</span><br />

            <Divider />

            <iframe
              frameBorder="0"
              style={style.iframe}
              src="https://www.google.com/maps/embed/v1/place?q=20%20Columbus%20Street%20Perth-Andover%2C%20NB%20E7H%201T3&key=AIzaSyBkIZNRhfLtZtOnsfMLLWzd-4fX9X9gzuI"
              allowFullScreen
            >
            </iframe>
          </Grid.Column>
          <Grid.Column computer={8} tablet={16} mobile={16}>
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
        </Grid>
      </Layout>
    );
  }
}

export default ContactPage;
