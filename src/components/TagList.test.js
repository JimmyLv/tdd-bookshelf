import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { fakeBook } from '../fixtures/book';
import { renderWithReduxAndRouter } from '../utils/testHelpers';
import { TagList } from './TagList';

test('should verify the tag link', () => {
  const history = createMemoryHistory();
  const { queryByText } = renderWithReduxAndRouter(<TagList category={'编程'} />, {
    initialState: {
      book: {
        list: [fakeBook],
      },
    },
    history,
  });

  userEvent.click(queryByText('JavaScript'));

  expect(history.location.search).toBe('?tag=JavaScript');
});
