import { expectSaga } from 'redux-saga-test-plan';
import * as effects from 'redux-saga/effects';
import * as service from '../services/book';
import book from './book';

jest.mock('../services/book', () => ({
  query: jest.fn(() => [{ name: '你不知道的JavaScript' }]),
}));

test('should fetch book list', async () => {
  await expectSaga(book.effects.fetch, { type: 'book/fetch' }, effects)
    .withReducer(book.reducers.update)
    .hasFinalState({ list: [{ name: '你不知道的JavaScript' }] })
    .run();

  expect(service.query).toBeCalled();
});
