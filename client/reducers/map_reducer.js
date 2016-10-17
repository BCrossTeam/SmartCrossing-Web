import _ from 'lodash';
import {FETCH_BOOKSHELVES, FETCH_BOOKS} from '../actions/map_actions';

const INITIAL_STATE = {
  bookshelves: null,
  activeBooks: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOOKSHELVES:
      const newBookshelves = _.mapKeys(action.payload.data.bookshelves, 'bookshelf_id');
      return {...state, bookshelves: newBookshelves};
    case FETCH_BOOKS:
      return {...state, activeBooks: action.payload.data};
    default:
      return state;
  }
}
