import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
  renderBookList() {
    const books = this.props.activeBooks.bookshelf_books;
    if(books.length < 1) {
      return (
          <h4>Przykro nam, ale na tej półce nie ma aktualnie książek :(</h4>
      );
    } else {
      return books.map((book) => {
        return(
          <div className="item" key={book.book_id}>
            <img className="ui image" src="/images/open-book.png"/>
            <div className="content">
              <div className="header">{book.book_title}</div>
              {book.book_author}
            </div>
          </div>
        );
      });
    }
  }

  render() {
    if(!this.props.activeBooks || !this.props.bookshelves) {
      return(
          <div id="module-two">
          <div className="ui active centered massive text loader">Ładowanie..</div>
          </div>
      );
    }

    return (
        <div id="module-two">
          <h3>PÓŁKA {this.props.bookshelves[this.props.activeBooks.bookshelf_id].bookshelf_name}</h3>
          <div className="ui celled list big">
            {this.renderBookList()}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBooks: state.map.activeBooks,
    bookshelves: state.map.bookshelves
  };
}

export default connect(mapStateToProps)(BookList);
