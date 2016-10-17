import {FETCH_USERS_NUMBER, FETCH_BOOKSHELF_NUMBER, FETCH_BORROWED_BOOKS} from '../actions/stats_actions';

const INITIAL_STATE = {
  books: null,
  bookshelves: null,
  readers: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS_NUMBER:
      return {...state, readers: action.payload.data.user_global_count};
    case FETCH_BOOKSHELF_NUMBER:
      return {...state, bookshelves: action.payload.data.bookshelf_global_count};
    case FETCH_BORROWED_BOOKS:
      return {...state, books: action.payload.data.book_global_borrow_count};
    default:
      return state;
  }
}
