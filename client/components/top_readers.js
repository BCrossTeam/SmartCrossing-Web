import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTopUsers} from '../actions/stats_actions';

class TopReaders extends Component {
  componentWillMount() {
    this.props.fetchTopUsers();
  }

  render() {
    const rank = this.props.topUsers;
    if(!rank || rank.length != 3) {
      return(
        <div className="ui active centered massive text loader">Ładowanie..</div>
      );
    }
    return(
      <div className="top-read">
        <h4>top czytelnicy</h4><hr />
        <div className="ui big list">
          <div className="item">
            <img className="ui avatar image" src="/images/gold-medal.png"/>
            <div className="content">
              <div className="header">{rank[0].user_name}</div>
              {rank[0].user_score} punktów
            </div>
          </div>
          <div className="item">
            <img className="ui avatar image" src="/images/silver-medal.png"/>
            <div className="content">
              <div className="header">{rank[1].user_name}</div>
              {rank[1].user_score} punktów
            </div>
          </div>
          <div className="item">
            <img className="ui avatar image" src="/images/bronze-medal.png"/>
            <div className="content">
              <div className="header">{rank[2].user_name}</div>
              {rank[2].user_score} punktów
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {topUsers: state.stats.topUsers};
}

export default connect(mapStateToProps, {fetchTopUsers})(TopReaders);
