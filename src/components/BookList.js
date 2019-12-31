import { Grid } from 'antd-mobile';
import { useSelector } from 'react-redux';
import { BookItem } from './BookItem';
import { createSelector } from 'reselect';
import { getBookList } from '../models/book';

const getBooksByCategory = createSelector(
  getBookList,
  (_, category) => category,
  (books, category) => books.filter(book => book.category === category)
);

export function BookList({ category }) {
  const books = useSelector(state => getBooksByCategory(state, category));

  return (
    <Grid
      data={books}
      columnNum={3}
      square={false}
      renderItem={book => <BookItem key={book.name} book={book} />}
    />
  );
}
