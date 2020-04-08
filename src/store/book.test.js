import { expectSaga } from 'redux-saga-test-plan'
import * as service from '../services/book'
import reducer, { sagas, types } from './book'

jest.mock('../services/book')

test('should fetch book list', async () => {
  const payload = { category: '文学' }
  service.getAllBooks.mockResolvedValue({
    data: [{ name: '你不知道的JavaScript' }],
  })

  const { storeState } = await expectSaga(sagas)
    .withReducer(reducer)
    .dispatch({ type: types.FETCH, payload })
    .run()
})
