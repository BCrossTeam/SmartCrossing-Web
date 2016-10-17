import axios from 'axios';

export const FETCH_USERS_NUMBER = 'FETCH_USERS_NUMBER';
export const FETCH_BOOKSHELF_NUMBER = 'FETCH_BOOKSHELF_NUMBER';
export const FETCH_BORROWED_BOOKS = 'FETCH_BORROWED_BOOKS';

import {ROOT_URL, urls} from './index';

export function fetchUsersNumber() {
  const req = axios.get(`${ROOT_URL}/${urls.usersNumber}`);
  return {
    type: FETCH_USERS_NUMBER,
    payload: req
  };
}

export function fetchBookshelfNumber() {
  const req = axios.get(`${ROOT_URL}/${urls.bookshelfNumber}`);
  return {
    type: FETCH_BOOKSHELF_NUMBER,
    payload: req
  };
}

export function fetchBorrowedBooksNumber() {
  const req = axios.get(`${ROOT_URL}/${urls.bookGeneralStats}`);
  return {
    type: FETCH_BORROWED_BOOKS,
    payload: req
  };
}
