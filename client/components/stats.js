import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsersNumber, fetchBookshelfNumber, fetchBorrowedBooksNumber} from '../actions/stats_actions';

class StatsModule extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchUsersNumber();
    this.props.fetchBookshelfNumber();
    this.props.fetchBorrowedBooksNumber();
  }

  render() {
    const {books, bookshelves, readers} = this.props.stats;
    if((!books && books !==0) || (!bookshelves && bookshelves !==0) || (!readers && readers !==0)) {
      return(
      <div id="module-one">
        <h2>Uwolnij wiedzę!</h2>
        <div className="ui active centered massive text loader">Ładowanie..</div>
      </div>
    );}
    return(
      <div id="module-one">
        <h2>Uwolnij wiedzę!</h2>
        <div className="ui statistics">
          <div className="ui statistic massive first-value">
              <div className="value">
                <img src="images/agenda.png" className="ui inline image" />
                <span>{books}</span>
              </div>
              <div className="label">
                <span>Wymienionych książek</span>
              </div>
            </div>

          <div className="ui statistic large second-value">
            <div className="value">
              <span>{bookshelves}</span>
              <img src="images/bookshelf.png" className="ui inline image" />
            </div>
            <div className="label">
              <span>Półek w Polsce</span>
            </div>
          </div>

          <div className="ui statistic massive third-value">
            <div className="value">
              <img src="images/users.png" className="ui inline image" />
              <span>{readers}</span>
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

function mapStateToProps(state) {
  return {stats: state.stats};
}

export default connect(mapStateToProps, {fetchUsersNumber, fetchBookshelfNumber, fetchBorrowedBooksNumber})(StatsModule);
