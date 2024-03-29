import React from 'react';
import { Grid, Divider, Icon, Header, Form, Button } from 'semantic-ui-react';
import cx from 'classnames';
import sharedStyles from 'shared/styles/shared.css';
import sharedColors from 'shared/styles/colors.css';
import Layout from '../../components/Layout';
import { title } from './index.md';
import s from './styles.css';

class ContactPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Grid
          className={cx(sharedStyles.gridMargin, s.topMargin)}
          style={{ marginBottom: '3em' }}
          stackable
          container
        >
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Header as="h1" className={sharedColors.action}>
              Connect With Our Office Team
            </Header>

            <div className={sharedColors.title}>
              <span>Uneak Products</span><br />
              <span>20 Columbus Street</span><br />
              <span>Perth-Andover, NB E7H 1T3</span><br /><br />
              <span><Icon name="phone" className={s.shadeBlack} />1-506-273-9492</span><br />
              <span><Icon name="phone" className={s.shadeBlack} />1-800-666-4911</span><br />
              <span><Icon name="fax" className={s.shadeBlack} />1-506-273-3273</span><br />
              <span>
                <Icon name="mail outline" className={s.shadeBlack} />
                office@bolstercanada.com
              </span>
              <br />
            </div>

            <Divider />

            <iframe
              frameBorder="0"
              id={s.iframe}
              src="https://www.google.com/maps/embed/v1/place?q=20%20Columbus%20Street%20Perth-Andover%2C%20NB%20E7H%201T3&key=AIzaSyBkIZNRhfLtZtOnsfMLLWzd-4fX9X9gzuI"
              allowFullScreen
            >
            </iframe>
          </Grid.Column>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Header size="medium" className={sharedColors.title}>
              Send Us A Message
            </Header>

            <Form action="https://formspree.io/uneakprojects@gmail.com" method="POST">
              <Form.Input
                type="text"
                label="First name"
                name="first_name"
                placeholder="First name"
                required
              />
              <Form.Input
                type="text"
                label="Last name"
                name="last_name"
                placeholder="Last name"
                required
              />
              <Form.Input type="text" label="Company" name="company" placeholder="Company" />
              <Form.Input type="text" label="Email" name="_replyto" placeholder="Email" required />
              <Form.TextArea
                label="Message"
                name="message"
                placeholder="Write us your message..."
                required
              />
              <Form.Checkbox label="Send me newsletters" name="newsletters" />
              <Form.Input
                type="hidden"
                name="_next"
                value="https://uneak-products-2d42f.firebaseapp.com/"
              />
              <Form.Input type="text" name="_gotcha" id={s.gotcha} />
              <Button className={cx(sharedStyles.actionButton, sharedColors.background)}>
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default ContactPage;
