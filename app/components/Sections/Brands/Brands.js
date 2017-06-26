import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Image, Header, Icon, Segment } from 'semantic-ui-react';
import sharedStyles from 'shared/styles/shared.css';
import cx from 'classnames';

function Brands(props) {
  const style = {
    card: { margin: '0 auto' },
  };

  return (
    <Segment
      className={cx(
        sharedStyles.sectionBG,
        sharedStyles.sectionMargin
      )}
      vertical
    >
      <Grid container>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Header
            as="h1"
            style={Object.assign({}, { position: 'relative' }, props.style.colors.action)}
          >
            <span id="brands" className={sharedStyles.anchorOffset}></span>
            Brands
          </Header>
          <Header
            as="h3"
            className={sharedStyles.sectionActionText}
            style={props.style.colors.title}
          >
            Learn more about our brands <Icon name="chevron right" />
          </Header>
        </Grid.Column>
        <Grid.Column computer={16} tablet={16} mobile={16}>
          <Grid columns={4} stackable>
            <Grid.Column computer={4} tablet={8} mobile={16}>
              <Card style={style.card} raised>
                <Image src="images/santas-solutions-logo.png" />
                <Card.Content style={style.cardContent}>
                  <Card.Header style={props.style.colors.title}>
                    Santa{"'"}s Solution
                  </Card.Header>
                  <Card.Description style={props.style.colors.title}>
                    {`Holiday's done right call for attention to detail,
                    right down to the stand. Santa’s Solution brand products
                    have a reputation as the best Christmas tree stands &
                    accessories on the market. To us, best means design,
                    quality. Durability & value. A lifetime manufacturer's
                    warranty backs our claim.`}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    className={cx('ui primary button', sharedStyles.actionButton)}
                    href="https://www.santassolution.com/"
                    target="_blank"
                    title="Santas Solutions"
                  >
                    Visit
                  </a>
                  <a
                    className="ui button"
                    href="#"
                    title="Santas Solutions Warranty"
                    onClick={() => false}
                  >
                    Warranty
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column computer={4} tablet={8} mobile={16}>
              <Card style={style.card} raised>
                <Image src="images/uneak-gardens-logo.png" />
                <Card.Content>
                  <Card.Header style={props.style.colors.title}>
                    Uneak Gardens
                  </Card.Header>
                  <Card.Description style={props.style.colors.title}>
                    {`Make any space a place to grow, build, Play & design
                    with Uneak Gardens brand of lawn & garden hardware! With
                    Uneak you're the creator and we give you the tools to make
                    your greenest dreams a reality – from gardens to sandboxes,
                    edging and more; come build & play with Uneak.`}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    className={cx('ui primary button', sharedStyles.actionButton)}
                    href="https://www.uneakgardens.com/"
                    target="_blank"
                    title="Uneak Gardens"
                  >
                    Visit
                  </a>
                  <a
                    className="ui button"
                    href="#"
                    title="Uneak Gardens Warranty"
                    onClick={() => false}
                  >
                    Warranty
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column computer={4} tablet={8} mobile={16}>
              <Card style={style.card} raised>
                <Image src="images/nooski-logo.png" />
                <Card.Content>
                  <Card.Header style={props.style.colors.title}>
                    Nooski
                  </Card.Header>
                  <Card.Description style={props.style.colors.title}>
                    {`Re-inventing the mouse trap is something the NOOSKI team
                    are very proud of and truly believe their patented concept
                    will one day be the globally preferred choice in rodent
                    control. No more poison, no more glue boards, no more snap
                    traps.`}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    className={cx('ui primary button', sharedStyles.actionButton)}
                    href="https://www.google.com/"
                    target="_blank"
                    title="Nooski Trap Systems"
                  >
                    Visit
                  </a>
                  <a
                    className="ui button"
                    href="#"
                    title="Nooski Warranty"
                    onClick={() => false}
                  >
                    Warranty
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column computer={4} tablet={8} mobile={16}>
              <Card style={style.card} raised>
                <Image src="images/biltek-logo.png" />
                <Card.Content>
                  <Card.Header style={props.style.colors.title}>
                    Biltek
                  </Card.Header>
                  <Card.Description style={props.style.colors.title}>
                    {`Biltek Industrial's powerhouse team have been associated
                    with a high level of quality and professionalism; they
                    bring a keen eye for problem solving & years of industry
                    experience. We want our clients to believe in the quality
                    of our work & the Real Deal customer experience.`}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    className={cx('ui primary button', sharedStyles.actionButton)}
                    href="https://www.google.com/"
                    target="_blank"
                    title="Biltek Industrial"
                  >
                    Visit
                  </a>
                  <a
                    className="ui button"
                    href="#"
                    title="Biltek Warranty"
                    onClick={() => false}
                  >
                    Warranty
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

Brands.propTypes = {
  header: PropTypes.string,
  style: PropTypes.object,
};

export default Brands;
