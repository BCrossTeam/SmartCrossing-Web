import axios from 'axios';
import _ from 'lodash';

import {ROOT_URL, urls} from './index';

export const FETCH_BOOKSHELVES = 'FETCH_BOOKSHELVES';
export const FETCH_BOOKS = 'FETCH_BOOKS';

export function fetchBookshelves() {
  const req = axios.get(`${ROOT_URL}/${urls.bookshelvesList}`);
  return {
    type: FETCH_BOOKSHELVES,
    payload: req
  };
}

export function fetchBooks(id) {
  let url = _.join(urls.bookshelfBooks, id);
  const req = axios.get(`${ROOT_URL}/${url}`);
  return {
    type: FETCH_BOOKS,
    payload: req
  };
}
