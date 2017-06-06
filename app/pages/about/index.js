import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { title } from './index.md';
import sharedColors from 'shared/styles/colors.css';

class AboutPage extends React.Component {

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
              Who We Are
            </Header>

            <Image src="http://via.placeholder.com/1600x600" fluid />

            <div style={{marginTop: '2em', textAlign: 'left'}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a lorem erat. Nullam pharetra turpis justo, nec vehicula dui condimentum vitae. Aliquam erat volutpat. Pellentesque sit amet enim et felis facilisis faucibus. Donec ultricies porta nibh ut facilisis. Proin viverra odio a arcu lacinia, ac cursus arcu commodo. Donec efficitur fringilla mi ut eleifend. Curabitur pretium auctor commodo. Curabitur mattis turpis in aliquet tincidunt. Nullam et vestibulum est.</p>
              <p>Aenean lacinia convallis massa. Donec eget diam felis. Mauris commodo purus eu cursus porta. Nam semper eget ipsum quis pulvinar. Vestibulum sed convallis orci. Phasellus bibendum nibh justo. Fusce volutpat tortor sed lacinia ornare. Nullam vitae lorem quis ex commodo ultrices. Nullam fermentum, odio sed tristique consequat, mauris libero dignissim ante, in tincidunt nisl dolor vel neque. Mauris mi ante, consequat ac ex vel, elementum tempus arcu. Aenean blandit pellentesque dolor vel consectetur.</p>
              <p>Ut sit amet nunc consectetur est congue tristique quis sed arcu. Mauris lobortis nunc sit amet sem varius dapibus non a lorem. Duis ultrices placerat eros, eu placerat arcu imperdiet sed. Aliquam erat tellus, fermentum at tristique nec, interdum id dui. Quisque molestie, est a blandit condimentum, sapien mauris tincidunt velit, sit amet aliquet urna magna non arcu. Nulla malesuada porttitor est at pharetra. Phasellus ut semper mi. Nam ac accumsan risus. Donec ornare vitae ante eu placerat. Morbi porttitor elit vitae nisl viverra commodo. Proin posuere eleifend nunc ac varius.</p>
            </div>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default AboutPage;
