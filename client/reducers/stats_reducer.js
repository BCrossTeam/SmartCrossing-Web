import {FETCH_STATS} from '../actions/index';

const INITIAL_STATE = {
  books: null,
  bookshelves: null,
  readers: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_STATS:
      return {...action.payload};
    default:
      return state;
  }
}
