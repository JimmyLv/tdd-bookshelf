import userEvent from '@testing-library/user-event';
import { CategoryTabs } from './CategoryTabs';
import { render } from '@testing-library/react';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

test('should show category list and fetch books by category', () => {
  const { queryByText } = render(<CategoryTabs categories={['编程', '文学', '历史']} />);

  userEvent.click(queryByText('文学'));

  expect(mockDispatch).toBeCalledWith({
    type: 'book/fetch',
    payload: {
      category: '文学',
    },
  });
});
