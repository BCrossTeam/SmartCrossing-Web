export const FETCH_STATS = 'FETCH_STATS';

export function fetchStats() {

  return {
    type: FETCH_STATS,
    payload: {
      books: 230,
      bookshelves: 15,
      readers: 68
    }
  };
}
