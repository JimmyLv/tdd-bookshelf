import { takeLatest } from 'redux-saga/effects'

export const NAME = 'book'
export const types = {
  FETCH: `${NAME}/FETCH_BOOKS`,
}
export const actions = {}

export function* sagas() {
  function* fetchBooks({ payload }) {}
  yield takeLatest(types.FETCH, fetchBooks)
}

const initialState = {
  list: [],
  total: 0,
  error: null,
}

export const getBookList = state => state.book.list

export default function reducer(state = initialState, action) {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}
