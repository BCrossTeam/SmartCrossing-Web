import React, {Component} from 'react';

class TopBook extends Component {
  render() {
    return(
      <div className="top-book">
        <h4>top czytelnicy</h4><hr />
        <div className="ui huge list">
          <div className="item">
            <img className="ui avatar image" src="/images/gold-medal.png"/>
            <div className="content">
              <div className="header">Steve Jobes</div>
              50 uwolnionych książek
            </div>
          </div>
          <div className="item">
            <img className="ui avatar image" src="/images/silver-medal.png"/>
            <div className="content">
              <div className="header">Stevie Feliciano</div>
              44 uwolnionych książek
            </div>
          </div>
          <div className="item">
            <img className="ui avatar image" src="/images/bronze-medal.png"/>
            <div className="content">
              <div className="header">Jenny Hess</div>
              11 uwolnionych książek
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default TopBook;
