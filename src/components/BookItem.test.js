import { render } from '@testing-library/react';
import { bookItem } from './BookItem.stories';

test('should show region and author of book', () => {
  const { queryByTestId } = render(bookItem());

  expect(queryByTestId('book-author').textContent).toBe('[美] Kyle');
});
