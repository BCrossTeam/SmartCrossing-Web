import React, {Component} from 'react';

class Tutorial extends Component {
  render() {
    return(

      <div className="ui container">

        <div className="ui three cards mob-hidden">
          <a className="red card">
            <div className="image">
            <img src="/images/download-app.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/scan-book.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/readit.png" />
            </div>
          </a>
        </div>

        <div className="ui grid equal width mob-hidden">
          <div className="row">
            <div className="column">
              <span className="step">zainstaluj</span><hr/>
              <p>In laoreet turpis ac turpis laoreet auctor. Morbi a consectetur dui. Aenean sit amet fringilla arcu, nec faucibus libero. Phasellus aliquam euismod felis, at dapibus diam lobortis sed.</p>
            </div>
            <div className="column">
              <span className="step">skanuj</span><hr/>
              <p>Efficitur est faucibus. Morbi ornare, dolor at porttitor placerat, felis velit mattis sapien, ac lobortis tortor magna vel mi. Nam dictum ante condimentum enim mollis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className="column">
              <span className="step">czytaj</span><hr/>
              <p>Nunc dignissim accumsan magna, sit amet volutpat quam mollis vel. Pellentesque et aliquam purus, tincidunt pharetra velit. Fusce sit amet pulvinar odio, vitae efficitur magna. Nam laoreet metus erat, vel placerat orci congue et.</p>
            </div>
          </div>
        </div>

        <div className="ui stackable cards desk-hidden">
          <a className="red card">
            <div className="image">
            <img src="/images/download-app.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/scan-book.png" />
            </div>
          </a>
          <a className="red card">
            <div className="image">
            <img src="/images/readit.png" />
            </div>
          </a>
        </div>

        <img src="/images/google.png" className="ui centered image download" />
      </div>
    );
  }
}

export default Tutorial;
