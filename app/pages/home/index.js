import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { title, header } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div className="ui vertical segment">
          <div className="ui stackable two column grid container">
            <div className="row">
              <div className="column">
                <div className="ui stackable grid">
                  <div className="row">
                    <div className="column">
                      <img className="ui fluid rounded image" src="http://placehold.it/600x200" alt="Uneak Products Placeholder" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <h2 className="ui header">{header}</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                        venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                        ultricies vel. Fusce tincidunt pellentesque magna, ut
                        faucibus quam finibus vitae. Aenean sed ante non eros
                        pharetra feugiat. Morbi turpis augue, blandit quis diam
                        id, sodales pharetra est. Nunc feugiat viverra eros.
                        Nunc suscipit diam nec egestas placerat. In ipsum lorem,
                        porta vitae nibh a, commodo finibus risus.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacus ipsum, euismod suscipit mauris ut, faucibus
                        venenatis nisi. Sed mattis diam nisi, nec porttitor quam
                        ultricies vel. Fusce tincidunt pellentesque magna, ut
                        faucibus quam finibus vitae. Aenean sed ante non eros
                        pharetra feugiat. Morbi turpis augue, blandit quis diam
                        id, sodales pharetra est. Nunc feugiat viverra eros.
                        Nunc suscipit diam nec egestas placerat. In ipsum lorem,
                        porta vitae nibh a, commodo finibus risus.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <span>Visit our trusted brands <i className="chevron right icon"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="ui stackable doubling two column grid">
                  <div className="column">
                    <img className="ui medium rounded image" src="http://placehold.it/250x250" alt="Brand Placeholder" />
                  </div>
                  <div className="column">
                    <img className="ui medium rounded image" src="http://placehold.it/250x250" alt="Brand Placeholder" />
                  </div>
                  <div className="column">
                    <img className="ui medium rounded image" src="http://placehold.it/250x250" alt="Brand Placeholder" />
                  </div>
                  <div className="column">
                    <img className="ui medium rounded image" src="http://placehold.it/250x250" alt="Brand Placeholder" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
