import React, {Component} from 'react';

class StatsModule extends Component {
  render() {
    return(
      <div id="module-one">
        <h2>Uwolnij wiedzę!</h2>
        <div className="ui statistics">
          <div className="ui statistic huge first-value">
              <div className="value">
                <img src="images/agenda.png" className="ui inline image" />
                <span>758</span>
              </div>
              <div className="label">
                <span>Wymienionych książek</span>
              </div>
            </div>

          <div className="ui statistic large second-value">
            <div className="value">
              <span>23</span>
              <img src="images/bookshelf.png" className="ui inline image" />
            </div>
            <div className="label">
              <span>Pólek we Wrocławiu</span>
            </div>
          </div>

          <div className="ui statistic large third-value">
            <div className="value">
              <img src="images/users.png" className="ui inline image" />
              <span>132</span>
            </div>
            <div className="label">
              <span>Czytelników</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsModule;
