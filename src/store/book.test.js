import { expectSaga } from 'redux-saga-test-plan'
import * as sagaEffects from 'redux-saga/effects'
import * as service from '../services/book'
import book from './book'

jest.mock('../services/book', () => ({
  query: jest.fn(() => [{ name: '你不知道的JavaScript' }]),
}))

test('should fetch book list', () => {
  const payload = { category: '文学' }

  expectSaga(book.effects.fetch, { payload }, sagaEffects)
    .withReducer(book.reducers.update, book.state)
    .hasFinalState({
      list: [{ name: '你不知道的JavaScript' }],
      total: 1,
    })
    .run()

  expect(service.query).toBeCalledWith(payload)
})
