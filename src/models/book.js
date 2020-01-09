import * as service from '../services/book';

export default {
  namespace: 'book',
  state: {
    list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (['/home'].includes(pathname)) {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
  effects: {
    *fetch({ payload }, { put, call }) {
      const response = yield call(service.query, payload);
      yield put({
        type: 'update',
        payload: response,
      });
    },
  },
};

export const getBookList = state => state.book.list;
