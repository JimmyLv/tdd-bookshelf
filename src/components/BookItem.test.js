import { fakeBook } from '../fixtures/book';
import { BookItem } from './BookItem';
import { render } from '@testing-library/react';

test('should show region and author of book', () => {
  const { queryByTestId } = render(<BookItem book={fakeBook} />);

  expect(queryByTestId('book-author').textContent).toBe('[美] Kyle');
});
