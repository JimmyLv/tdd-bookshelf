import { fakeBook } from '../fixtures/book';
import { BookItem } from './BookItem';

export default {
  title: 'BookItem',
};

export function bookItem() {
  return <BookItem book={fakeBook} />;
}
