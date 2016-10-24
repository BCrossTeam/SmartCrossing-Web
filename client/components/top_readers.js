import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTopUsers} from '../actions/stats_actions';

class TopReaders extends Component {
  componentWillMount() {
    this.props.fetchTopUsers();
  }

  renderTopUsers() {
    const rank = this.props.topUsers;
    if(!rank) {
      return(
        <div className="ui active centered big text loader">Ładowanie..</div>
      );
    } else if(rank.length != 3) {
      return(
        <h5 style={{color: '#B90504', fontSize: '1.5em'}}>Brak wystarczającej liczby użytkowników.</h5>
      );
    }
    return rank.map((topUser, i) => {
      let medals = ['gold', 'silver', 'bronze'];
      return (
        <div className="item" key={topUser.user_id}>
          <img className="ui avatar image" src={`/images/${medals[i]}-medal.png`}/>
          <div className="content">
            <div className="header">{topUser.user_name}</div>
            {topUser.user_score} punktów
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="top-read">
        <h4>top czytelnicy</h4><hr />
        <div className="ui big list">
          {this.renderTopUsers()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {topUsers: state.stats.topUsers};
}

export default connect(mapStateToProps, {fetchTopUsers})(TopReaders);
