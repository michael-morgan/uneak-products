import React from 'react';
import { Grid, Header, Image, Divider } from 'semantic-ui-react';
import sharedColors from 'shared/styles/colors.css';
import sharedStyles from 'shared/styles/shared.css';
import Layout from '../../components/Layout';
import { title } from './index.md';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <Grid
          className={sharedStyles.gridMargin}
          style={{ marginBottom: '3em' }}
          stackable
          container
        >
          <Grid.Column computer={16} tablet={16} mobile={16} textAlign="center">
            <Header
              as="h1"
              className={sharedColors.action}
              style={{ marginTop: '1em' }}
            >
              Who We Are
            </Header>

            <div style={{ marginTop: '2em', fontSize: '16px' }}>
              <p>
                {`Uneak Products a division of BCI designs, manufactures and
                  markets high quality Christmas tree stands and accessories
                  throughout the U.S. and Canada. The company’s focus is on
                  unique, problem Solving hardware that are designed to exceed
                  customer expectations. With 25 years’ experience supplying
                  major retailers throughout the United States and Canada, the
                  dedicated staff at BCI continually strive for excellence in
                  customer service and support.`}
              </p>
              <Image
                src="images/build/about-us-img.jpg"
                alt="Picture of BCI headquarters in Perth-Andover, NB"
                fluid
              />

              <Divider section />

              <p>
                {`BCI is a privately owned family run corporation with
                  Headquarters in Perth-Andover New Brunswick Canada. The
                  company was founded in 1993 (formerly Christmas Mountains MFG)
                  by current owner Michael Bolster with a design for an
                  outstanding Christmas tree stand and an order to supply
                  national retailers. With a passion for designing better
                  products, 5 different models of tree stands were developed to
                  meet market needs. Problem solving Christmas hardware
                  accessories were also introduced such as the “No Swing” Wreath
                  Hanger, Auto-stop Tree Waterer, Fresh Cut Tree Preservative,
                  Degradable Tree Disposal Bag & a Floor Protection Tray.`}
              </p>
              <Image
                src="images/build/ss-products.png"
                alt={`Showcasing Santa's Solutions Christmas tree stands,
                      wreath hanger, Christmas tree tray, and other products.`}
                centered
              />

              <Divider section />

              <p>
                {`Looking to the future, Uneak Products saw a need for
                  multi-use Lawn & Garden products and with that the
                  Uneak Gardens brand was born. The Raised Garden Bed Bracket
                  is the first product in the new line for 2017 built for
                  function, strength, versatility and sparked big advancements
                  for Uneak as the best on the market.`}
              </p>
              <Image
                src="images/build/ug-products.png"
                alt="Showcasing 45 degree, 90 degree, and 180 degree angle brackets."
                centered
              />
            </div>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default AboutPage;
