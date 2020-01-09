import { expectSaga } from 'redux-saga-test-plan';
import * as effects from 'redux-saga/effects';
import * as service from '../services/book';
import book from './book';

jest.mock('../services/book', () => ({
  query: jest.fn(() => [{ name: '你不知道的JavaScript' }]),
}));

test('should fetch book list', async () => {
  const payload = { category: '文学' };

  await expectSaga(book.effects.fetch, { payload }, effects)
    .withReducer(book.reducers.update)
    .hasFinalState({ list: [{ name: '你不知道的JavaScript' }] })
    .run();

  expect(service.query).toBeCalledWith(payload);
});
