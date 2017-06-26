import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { title } from './index.md';
import sharedColors from 'shared/styles/colors.css';
import sharedStyles from 'shared/styles/shared.css';

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

            <Image src="images/about-us-img.jpg" fluid />

            <div style={{ marginTop: '2em', textAlign: 'left' }}>
              <p>
                {`Uneak Products a division of BCI designs, manufactures and
                markets high quality Christmas tree stands and accessories
                throughout the U.S. and Canada. The company's focus is on
                unique, problem Solving hardware that are designed to exceed
                customer expectations. With 25 years' experience supplying
                major retailers throughout the United States and Canada, the
                dedicated staff at BCI continually strive for excellence in
                customer service and support.`}
              </p>
              <p>
                {`BCI is a privately owned family run corporation with
                Headquarters in Perth-Andover New Brunswick Canada. The company
                was founded in 1993 (formerly Christmas Mountains MFG) by
                current owner Michael Bolster with a design for an outstanding
                Christmas tree stand and an order to supply national retailer,
                Canadian Tire. With a passion for designing better products, 5
                different models of tree stands were developed to meet market
                needs. Problem solving Christmas hardware accessories were also
                introduced such as the "No Swing" Wreath Hanger, Auto-stop Tree
                Waterer, Fresh Cut Tree Preservative, Degradable Tree Disposal
                Bag & a Floor Protection Tray.`}
              </p>
              <p>
                {`Looking to the future, Uneak Products saw a need for
                multi-use Lawn & Garden products and with that came the napkin
                design – brought to life one year later the company is
                launching Uneak Gardens, the first brand of a new product line.
                2017 sparked big advancements for Uneak and we look forward to
                continuing to proudly serve our customers bringing them unique
                solutions.`}
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default AboutPage;
