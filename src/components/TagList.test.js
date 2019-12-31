import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { renderWithReduxAndRouter } from '../utils/testHelpers';
import { TagList } from './TagList';

const fakeBook = {
  id: 2,
  name: '你不知道的Java',
  author: 'JimmyLv',
  region: '中国',
  cover: 'http://cover.read.duokan.com/mfsv2/download/s010/p01g8NOQ3Elv/azwcob3UZrT7X6.jpg!e',
  category: '编程',
  tags: ['Java', 'Web'],
};

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

  userEvent.click(queryByText('Java'));

  expect(history.location.pathname).toBe('/tags/Java');
});
